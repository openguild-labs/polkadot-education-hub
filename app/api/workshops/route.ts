import { NextResponse } from 'next/server';
import { workshops as allWorkshops } from '@/constants';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: allWorkshops,
      count: allWorkshops.length,
    });
  } catch (error) {
    console.error('Error fetching workshops:', error);
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
