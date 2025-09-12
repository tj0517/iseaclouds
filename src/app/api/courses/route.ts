import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      type,
      name,
      companyName,
      country,
      city,
      zip,
      address,
      taxId,
      email,
      phone,
      course,
    } = body

    // transporter (np. Gmail, albo SMTP od hostingu)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ustaw w .env.local
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tjezionek2000@gmail.com", // gdzie ma przyjść zamówienie
      subject: `New course order: ${course.title}`,
      text: `
New order for ${course.title} (${course.type}) - ${course.price}

Name: ${name}
Company: ${companyName || "-"}
Country: ${country}
City: ${city}
ZIP: ${zip}
Address: ${address}
Tax ID: ${taxId || "-"}

E-mail: ${email}
Phone: ${phone}
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Email error:", err)
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 })
  }
}
