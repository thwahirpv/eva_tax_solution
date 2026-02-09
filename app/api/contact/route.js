import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key
// NOTE: Ensure RESEND_API_KEY is set in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // 1. Basic Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // 2. Email Format Validation (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address format.' },
                { status: 400 }
            );
        }

        // 3. Send Email via Resend
        const data = await resend.emails.send({
            from: 'Eva Tax Solutions <contact@mail.evataxsolutions.ca>', // Must match verified domain
            to: ['info@evataxsolutions.ca'], // Destination email
            replyTo: email, // Allow replying directly to the user
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { margin: 0; padding: 0; background-color: #F9FBFA; font-family: 'Arial', sans-serif; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { background-color: #4d7c6e; padding: 30px 20px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; font-family: 'Times New Roman', serif; letter-spacing: 0.5px; }
            .content { padding: 40px 30px; }
            .label { color: #6B7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { color: #111827; font-size: 16px; margin-bottom: 20px; line-height: 1.5; }
            .message-box { background-color: #F3F4F6; padding: 20px; border-radius: 6px; border-left: 4px solid #63C384; font-size: 16px; color: #374151; white-space: pre-wrap; margin-top: 10px; }
            .footer { background-color: #F9FAFB; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB; font-size: 12px; color: #9CA3AF; }
            .button { display: inline-block; background-color: #63C384; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; margin-top: 20px; }
            a { color: #4d7c6e; text-decoration: none; }
          </style>
        </head>
        <body>
          <div style="padding: 40px 0;">
            <div class="container">
              <!-- Header -->
              <div class="header">
                <h1>EVA TAX SOLUTIONS</h1>
              </div>
              
              <!-- Content -->
              <div class="content">
                <h2 style="color: #111827; margin-top: 0; margin-bottom: 25px; font-size: 20px;">New Inquiry</h2>
                
                <div class="label">Name</div>
                <div class="value">${name}</div>
                
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
                
                <div class="label">Phone</div>
                <div class="value">${phone || '<span style="color:#9CA3AF; font-style:italic;">Not provided</span>'}</div>
                
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
                
                <div style="text-align: center; margin-top: 35px;">
                  <a href="mailto:${email}" class="button">Reply via Email</a>
                </div>
              </div>
              
              <!-- Footer -->
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Eva Tax Solutions. All rights reserved.</p>
                <p>This email was sent from your website contact form.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('SERVER ERROR:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
