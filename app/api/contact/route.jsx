import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const receiver = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  console.log("Gestendo la richiesta");
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone") || "N/D"; // Default if not provided
  const address = formData.get("address") || "N/D";
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Create transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: receiver,
      subject: `Nuova richiesta di contatto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #52565e; padding: 20px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);">
      
      <header style="background-color: #feb900; padding: 20px; text-align: center; color: #fff;">
        <h3 style="margin: 0; font-size: 24px;">Nuova Richiesta di Contatto</h3>
        <p style="font-size: 16px; margin: 5px 0;">Hai ricevuto un messaggio dal tuo sito web</p>
      </header>

      <section style="padding: 20px;">
        <p style="font-size: 18px; line-height: 1.6; margin: 10px 0;">
          <strong>Nome:</strong> ${name}
        </p>
        <p style="font-size: 18px; line-height: 1.6; margin: 10px 0;">
          <strong>Email:</strong> ${email}
        </p>
        <p style="font-size: 18px; line-height: 1.6; margin: 10px 0;">
          <strong>Telefono:</strong> ${phone}
        </p>
        <p style="font-size: 18px; line-height: 1.6; margin: 10px 0;">
          <strong>Indirizzo:</strong> ${address}
        </p>
        <p style="font-size: 18px; line-height: 1.6; margin: 10px 0;">
          <strong>Soggetto:</strong> ${subject}
        </p>
        <p style="font-size: 18px; line-height: 1.6; margin: 20px 0 10px;">
          <strong>Messaggio:</strong>
        </p>
        <div style="padding: 15px; background-color: #f1f1f1; border-left: 4px solid #feb900; font-size: 16px; line-height: 1.8;">
          ${message}
        </div>
      </section>

      <footer style="background-color: #feb900; padding: 15px; text-align: center; color: #fff;">
        <p style="margin: 0; font-size: 14px;">
          Grazie per utilizzare il nostro servizio! Per ulteriori informazioni, visita il nostro sito web.
        </p>
      </footer>

    </div>
  </div>
      `,
    });

    return NextResponse.json({ message: "Successo: email inviata" });
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({
      message: "IMPOSSIBILE INVIARE IL MESSAGGIO",
    });
  }
}
