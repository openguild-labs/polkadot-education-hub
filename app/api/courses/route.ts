import { NextResponse } from 'next/server';
import { courses as allCourses } from '@/constants';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: allCourses,
      count: allCourses.length,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
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
