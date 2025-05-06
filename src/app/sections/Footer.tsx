'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDribbble, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a1a] text-white px-6 py-16 text-center rounded-t-[2rem]">
            <h2 className="text-2xl font-serif font-semibold mb-2">Karen Chahalyan</h2>
            <p className="text-gray-400 mb-6 text-sm">Freelance Product Designer</p>

            <div className="flex justify-center gap-4 mb-8">
                <Link
                    href="https://github.com/KChakhalyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#252525] hover:bg-lime-400 hover:text-black p-3 rounded-full transition"
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#252525] hover:bg-lime-400 hover:text-black p-3 rounded-full transition"
                >
                    <FaDribbble />
                </Link>
                <Link
                    href="mailto:you@example.com"
                    className="bg-[#252525] hover:bg-lime-400 hover:text-black p-3 rounded-full transition"
                >
                    <FaEnvelope />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/karen-chakhalyan-10401a88/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#252525] hover:bg-lime-400 hover:text-black p-3 rounded-full transition"
                >
                    <FaLinkedin />
                </Link>
            </div>

            <p className="text-sm text-gray-600">© {year} Robbi Davis. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
