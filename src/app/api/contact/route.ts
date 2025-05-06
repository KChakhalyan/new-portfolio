import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    // ✅ Создаём SMTP-транспорт
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // или smtp.yandex.ru, smtp.mail.ru и т.д.
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,  // в .env
            pass: process.env.SMTP_PASS,  // в .env
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_RECEIVER, // Кому отправляем
            subject: 'New Contact Form Message',
            text: message,
            html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('❌ Email send error:', err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
