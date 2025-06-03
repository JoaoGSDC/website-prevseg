import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/app/api/utils/dbConnect';

export async function GET(request: NextRequest) {
  try {
    const db = await connectToDatabase();

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('q');

    if (!search) {
      return NextResponse.json({ error: 'Missing search query' }, { status: 400 });
    }

    const words = search
      .trim()
      .split(/\s+/)
      .map((word) => new RegExp(word, 'i'));

    const posts = await db
      .collection('posts')
      .find({
        title: { $in: words.map((regex) => ({ $regex: regex })) },
      })
      .toArray();

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
