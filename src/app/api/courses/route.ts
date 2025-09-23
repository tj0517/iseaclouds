import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      course, 
      emailType,
      type,
      companyName,
      country,
      city,
      zip,
      address,
      taxId,
      phone
    } = body

    // Konfiguracja transporter email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email dla klienta
    if (emailType === 'customer') {
      const emailSubject = `Potwierdzenie zamówienia kursu: ${course.title}`
      
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Potwierdzenie zamówienia</title>
        </head>
        <body>
            <h2>Dziękujemy za zamówienie!</h2>
            <p><strong>Witaj ${name},</strong></p>
            <p>Twoje zamówienie kursu <strong>${course.title}</strong> zostało pomyślnie przyjęte.</p>
            
            <h3>Szczegóły zamówienia:</h3>
            <ul>
                <li><strong>Kurs:</strong> ${course.title}</li>
                <li><strong>Cena:</strong> ${course.price} PLN</li>
                <li><strong>Data zamówienia:</strong> ${new Date().toLocaleDateString('pl-PL')}</li>
            </ul>

            <h3>Dalsze kroki:</h3>
            <p>W ciągu 24 godzin skontaktujemy się z Tobą w celu potwierdzenia szczegółów płatności i dostępu do kursu.</p>
            
            <p>W razie pytań prosimy o kontakt pod adresem: info@seaclouds.eu</p>
            
            <hr>
            <p><small>Wiadomość wygenerowana automatycznie. Prosimy nie odpowiadać.</small></p>
        </body>
        </html>
      `

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      }

      await transporter.sendMail(mailOptions)
      
      return NextResponse.json(
        { message: 'Customer email sent successfully' },
        { status: 200 }
      )
    }

    // Email dla admina (domyślnie)
    const emailSubject = `New course order: ${course.title}`
    
    const emailText = `
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

Order type: ${type}
Order date: ${new Date().toLocaleString('pl-PL')}
    `

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL || "tjezionek2000@gmail.com",
      subject: emailSubject,
      text: emailText,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Admin email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}