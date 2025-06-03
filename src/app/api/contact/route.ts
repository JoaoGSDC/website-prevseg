import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, telephone, email, message } = await req.json();

  if (!name || !telephone || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Exemplo: smtp.gmail.com ou smtp.seuprovedor.com
    port: Number(process.env.SMTP_PORT) || 465, // 587 (TLS) ou 465 (SSL)
    secure: true, // true para 465, false para 587
    auth: {
      user: process.env.SMTP_USER, // contato@academiamontecastelo.com.br
      pass: process.env.SMTP_PASS, // Senha de aplicativo ou do provedor
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // O e-mail que está enviando
    to: 'contato@academiamontecastelo.com.br', // O destinatário
    replyTo: email, // O e-mail do usuário, caso queiram responder
    subject: `Contato de ${name}`,
    text: `Nome: ${name}\nTelefone: ${telephone}\nEmail: ${email}\nMensagem: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send email', details: errorMessage }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: { Allow: 'POST' } });
}
