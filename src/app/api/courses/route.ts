import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Sprawdź czy zmienne środowiskowe są ustawione
    const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_PORT']
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
    
    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars)
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const body = await request.json()
    console.log('Received order data:', JSON.stringify(body, null, 2))

    const { 
      name, 
      email, 
      course, 
      emailType,
      type = 'individual',
      companyName,
      country,
      city,
      zip,
      address,
      taxId,
      phone
    } = body

    // Walidacja wymaganych pól
    if (!name || !email || !course || !emailType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

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

    // Test połączenia SMTP
    try {
      await transporter.verify()
      console.log('SMTP connection verified')
    } catch (smtpError) {
      console.error('SMTP connection failed:', smtpError)
      return NextResponse.json(
        { error: 'Email service unavailable' },
        { status: 503 }
      )
    }

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
        from: process.env.EMAIL_USER,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      }

      const result = await transporter.sendMail(mailOptions)
      console.log('Customer email sent:', result.messageId)
      
      return NextResponse.json(
        { 
          message: 'Customer email sent successfully',
          messageId: result.messageId 
        },
        { status: 200 }
      )
    }

    // Email dla admina
    const emailSubject = `📚 Nowe zamówienie kursu: ${course.title}`
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>Nowe zamówienie</title>
      </head>
      <body>
          <h2>📚 Nowe zamówienie kursu</h2>
          
          <h3>Szczegóły kursu:</h3>
          <ul>
              <li><strong>Kurs:</strong> ${course.title}</li>
              <li><strong>Typ:</strong> ${course.type}</li>
              <li><strong>Cena:</strong> ${course.price} PLN</li>
          </ul>

          <h3>Dane klienta:</h3>
          <ul>
              <li><strong>Imię i nazwisko:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Telefon:</strong> ${phone || 'Nie podano'}</li>
              <li><strong>Typ zamówienia:</strong> ${type}</li>
              ${companyName ? `<li><strong>Firma:</strong> ${companyName}</li>` : ''}
              ${taxId ? `<li><strong>NIP:</strong> ${taxId}</li>` : ''}
          </ul>

          <h3>Adres:</h3>
          <ul>
              <li><strong>Kraj:</strong> ${country}</li>
              <li><strong>Miasto:</strong> ${city}</li>
              <li><strong>Kod pocztowy:</strong> ${zip}</li>
              <li><strong>Adres:</strong> ${address}</li>
          </ul>

          <p><strong>Data zamówienia:</strong> ${new Date().toLocaleString('pl-PL')}</p>
      </body>
      </html>
    `

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || "tjezionek2000@gmail.com",
      subject: emailSubject,
      html: emailHtml,
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Admin email sent:', result.messageId)

    return NextResponse.json(
      { 
        message: 'Admin email sent successfully',
        messageId: result.messageId 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process order',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}