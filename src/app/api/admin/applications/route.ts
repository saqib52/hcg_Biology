import { NextRequest, NextResponse } from 'next/server';
import { getApplications } from '@/lib/storage';

export async function GET(req: NextRequest) {
  try {
    const apps = await getApplications();
    return NextResponse.json({
      success: true,
      count: apps.length,
      applications: apps,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
