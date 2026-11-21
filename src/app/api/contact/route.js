import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateEmail, validatePhone, sanitizeInput } from "../../../lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, email, service, subject, message, website } = body;

    // 1. Honeypot Spam Protection
    // If the hidden "website" field is filled, it's a bot. Pretend it was successful.
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Server-side Validation
    if (!fullName || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    if (email && !validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Sanitize Inputs
    const cleanName = sanitizeInput(fullName);
    const cleanMessage = sanitizeInput(message);
    const cleanSubject = subject ? sanitizeInput(subject) : "New Enquiry";
    
    // 4. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: "ToneUp Solutions Website <onboarding@resend.dev>", // Replace with your verified domain in production (e.g., enquiries@toneupsolutions.com)
      to: [process.env.CONTACT_EMAIL || "toneupsolutions@gmail.com"],
      subject: `New Enquiry: ${cleanSubject} - ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #03123B;">New Website Enquiry</h2>
          <p>You have received a new enquiry from the ToneUp Solutions website.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${cleanSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background-color: #F4F7FA; border-radius: 8px;">
            <strong>Message:</strong><br />
            <p style="white-space: pre-wrap;">${cleanMessage}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send the enquiry. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}