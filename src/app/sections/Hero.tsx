'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">
            <motion.div
                className="w-full max-w-2xl bg-white rounded-[2rem] shadow-xl text-center p-10 relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Avatar + Greeting Bubble */}
                <div className="flex justify-center mb-6 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                            src="/images/avatar.jpeg"
                            alt="Avatar"
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute top-0 transform -translate-x-1/2 -translate-y-full bg-white shadow px-3 py-1 text-sm rounded-full text-gray-800">
                        Hi, I'm Karen 👋
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-snug">
                    Building digital<br />
                    products and effective<br />
                    solutions
                </h1>

                {/* Button */}
                <motion.a
                    href="#contact"
                    className="mt-8 inline-block bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium shadow-md transition-all duration-200"
                    whileHover={{ y: -2 }}
                >
                    Contact me ↗
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
