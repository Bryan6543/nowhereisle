// app/api/support/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // Create Resend instance only when the request is made (not at build time)
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { reportType, gameReportType, subject, description } =
      await req.json();

    const finalSubject = `[${reportType.toUpperCase()}] ${subject}`;

    await resend.emails.send({
      from: "NowhereIsle Support <support@nowhereisle.com>",
      to: "fnirmal11@gmail.com",
      subject: finalSubject,
      html: `
        <h3>New Support Request</h3>
        <p><strong>Report Type:</strong> ${reportType}</p>
        ${gameReportType ? `<p><strong>Game Report Type:</strong> ${gameReportType}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
      text: `
Report Type: ${reportType}
${gameReportType ? `Game Report Type: ${gameReportType}` : ""}
Subject: ${subject}

${description}
      `,
    });

    console.log("✅ Email sent via Resend");
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("❌ Resend Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}