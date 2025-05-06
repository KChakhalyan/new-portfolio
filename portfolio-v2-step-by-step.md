# Portfolio V2 — Step-by-Step Build Guide

> This guide walks you through building a modern portfolio site using **Next.js 15 (App Router)** and **Tailwind CSS**, based on a Behance-style design.

---

## ✅ 1. Project Setup

### 🛠 Initialize project

```bash
npx create-next-app@latest portfolio-v2
cd portfolio-v2
```

Select **TypeScript**, **App Router**, **Tailwind**, and `src/` directory.

---

## 📁 2. Folder Structure

```
/src
  /app
    /[locale]
      page.tsx
    /api
      /contact
        route.ts
  /components
  /sections
  /data
/public
  /images
.env.local
```

---

## 🎨 3. Build UI Sections

### 3.1 Hero Section

```tsx
<div className="min-h-screen bg-[url('/hero.png')] bg-cover bg-center text-white flex flex-col items-center justify-center text-center">
  <h1 className="text-6xl font-serif font-bold mb-4">Robbi Davis</h1>
  <p className="text-xl text-gray-300">Product Designer</p>
</div>
```

---

### 3.2 About Section + Masonry Grid

```tsx
<div className="md:columns-2 gap-4 space-y-4">
  {'{'}projects.map(project => (
    <div key={'{'}project.id{'}'} className="break-inside-avoid bg-[#252525] rounded-xl p-4">
      <h3 className="text-lg font-semibold">{'{'}project.title{'}'}</h3>
      <p className="text-gray-400 text-sm">{'{'}project.description{'}'}</p>
    </div>
  )){'}'}
</div>
```

---

### 3.3 Feedback Section

- Use `framer-motion` to fade in testimonial cards
- Use `motion.div` and variants

---

### 3.4 Cooperation Section (FAQ Modal)

- Add animated modal with `framer-motion`
- Detect click outside to close

---

## 📬 4. Email Form Setup (Contact Section)

### 4.1 Install nodemailer

```bash
npm install nodemailer
```

### 4.2 Create API route

```ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"$'{'}name{'}'" <$'{'}email{'}'>`,
    to: process.env.CONTACT_RECEIVER,
    subject: "New Contact Form Message",
    text: message,
  });

  return NextResponse.json({ success: true });
}
```

---

### 4.3 Add environment variables

```env
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
CONTACT_RECEIVER=your@gmail.com
```

---

## 📥 5. Footer

```tsx
<footer className="text-center text-sm text-gray-600 py-10">
  © {'{'}new Date().getFullYear(){'}'} Robbi Davis
</footer>
```

---

## ✅ Final Touches

- Mobile responsive with Tailwind utilities
- Animations via framer-motion
- Deployment on Vercel

---

## 📅 Completed: 2025-05-06

Crafted with ❤️ by Karen + ChatGPT
