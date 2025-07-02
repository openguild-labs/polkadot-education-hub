import { NextResponse } from 'next/server';
import { researchArticles } from '@/constants';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: researchArticles,
      count: researchArticles.length,
    });
  } catch (error) {
    console.error('Error fetching education content:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'An unknown error occurred',
      },
      { status: 500 }
    );
  }
}
