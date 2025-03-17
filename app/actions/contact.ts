"use server"

import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

export async function sendContactForm(data: ContactFormData) {
  // Create a test SMTP transporter
  // In production, you would use your actual SMTP credentials
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "user@example.com",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.MAIL_FROM || "contact@thinkai.com",
    to: process.env.MAIL_TO || "support@thinkai.com",
    subject: `Contact Form: ${data.subject}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      ${data.company ? `Company: ${data.company}` : ""}
      
      Message:
      ${data.message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #06b6d4;">
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    `,
  }

  try {
    // In development, log the email instead of sending it
    if (process.env.NODE_ENV === "development") {
      console.log("Email would be sent:", mailOptions)
      return { success: true }
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

