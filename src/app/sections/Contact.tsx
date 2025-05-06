'use client';

import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                form.reset();
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="bg-white text-black px-6 py-24 rounded-t-[2rem] mt-[-2rem]">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                    Let’s Connect
                </h2>
                <p className="text-gray-400 mb-10">
                    I’m always open to discussing projects or collaboration opportunities.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full bg-[#252525] text-white border border-gray-700 px-5 py-3 rounded-full focus:outline-none focus:border-lime-400 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="w-full bg-[#252525] text-white border border-gray-700 px-5 py-3 rounded-full focus:outline-none focus:border-lime-400 transition"
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your message"
                        required
                        className="w-full bg-[#252525] text-white border border-gray-700 px-5 py-3 rounded-2xl focus:outline-none focus:border-lime-400 transition resize-none"
                    ></textarea>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition"
                        >
                            Send Message ↗
                        </button>
                    </div>

                    {status === 'success' && (
                        <p className="text-green-500 mt-4">✅ Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 mt-4">❌ Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
