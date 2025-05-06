'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white"
        >
            <motion.h1
                className="text-5xl md:text-7xl font-bold font-serif mb-4 "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Hi, I’m Karen
            </motion.h1>

            <motion.p
                className="text-lg md:text-2xl text-gray-600 mb-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                I design clean user interfaces for web and mobile. Portfolio & product designer.
            </motion.p>

            <motion.a
                href="#projects"
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                View Projects
            </motion.a>
        </section>
    );
};

export default Hero;
