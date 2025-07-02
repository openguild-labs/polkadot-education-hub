import { NextResponse } from 'next/server';
import { communityCallVideos, generalVideos, technicalVideos } from '@/constants';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        communityCallVideos,
        generalVideos,
        technicalVideos,
      },
      count: communityCallVideos.length + generalVideos.length + technicalVideos.length,
    });
  } catch (error) {
    console.error('Error fetching videos:', error);
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
