const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAILID,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  console.log("Sending... ");

  const info = await transporter.sendMail({
    from: `"${data.name} 👻" <${data.email}>`,
    to: process.env.MAILID,
    subject: "Response from ABIBI.in ✔",
    text: data.message,
    html: `<b>${data.message}</b>`,
  });

  console.log("Message sent: %s", info.messageId);

  return NextResponse.json({
    status: "Success",
  });
}
