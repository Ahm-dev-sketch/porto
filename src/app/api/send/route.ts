import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || "delivered@resend.dev";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: recipient,
      subject: `New Portfolio Message: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; color: #333;">
          <h2 style="color: #000; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #000; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666; margin: 0;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend sending error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
