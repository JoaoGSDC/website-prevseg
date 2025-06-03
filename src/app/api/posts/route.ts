import { NextResponse } from 'next/server';
import connectToDatabase from '../utils/dbConnect';
import { Db } from 'mongodb';

connectToDatabase();

export async function GET() {
  try {
    const db: Db = await connectToDatabase();

    const posts = await db.collection('posts').find({}).sort({ createdAt: -1 }).limit(20).toArray();

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
