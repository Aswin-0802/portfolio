import { NextResponse } from 'next/server'

/**
 * POST /api/contact
 * Kept as a fallback endpoint. Contact form now uses EmailJS (client-side).
 * This route is not actively used.
 */
export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json(
      { success: true, message: 'Message received.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Failed to process message.' }, { status: 500 })
  }
}