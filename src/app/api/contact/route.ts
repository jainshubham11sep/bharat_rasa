import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const required = [
      "from_name",
      "reply_to",
      "contact_number",
      "company_name",
      "domain",
      "instagram",
      "discovered_via",
      "current_roas",
      "current_revenue",
      "problem",
      "budget",
      "message",
    ];

    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // TODO: Integrate with EmailJS, SendGrid, Resend, or your preferred email provider
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Bharat Innovations <noreply@gogrowth.co>',
    //   to: ['hello@gogrowth.co'],
    //   subject: `New contact from ${body.from_name} - ${body.company_name}`,
    //   html: formatEmailHtml(body),
    // });

    // For now, log and return success
    console.log("Contact form submission:", {
      name: body.from_name,
      email: body.reply_to,
      company: body.company_name,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
