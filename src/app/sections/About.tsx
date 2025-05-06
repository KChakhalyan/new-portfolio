'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const About = () => {
    return (
        <section className="bg-[#1a1a1a] text-white px-6 py-24 rounded-t-[2rem]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Column — Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                        Hello, I’m Robbi Davis!
                    </h2>
                    <p className="text-gray-400 text-lg mb-10">
                        And my job is to turn your ideas into vibrant visual solutions that will make your brand stand out!
                    </p>

                    <div className="space-y-4 font-mono text-sm text-gray-300">
                        <div className="flex items-center gap-4">
                            <span className="text-white font-semibold">01</span>
                            <div className="w-12 border-t border-gray-600" />
                            <span>WEB DESIGN</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-white font-semibold">02</span>
                            <div className="w-12 border-t border-lime-400" />
                            <span className="text-lime-400 font-bold">UI/UX DESIGN</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-white font-semibold">03</span>
                            <div className="w-12 border-t border-gray-600" />
                            <span>BRANDING</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column — Masonry-style Projects */}
                <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="break-inside-avoid bg-[#252525] rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition min-h-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <div className="mt-4 text-sm text-gray-400 flex justify-between items-center">
                                <span>
                                    PROJECT DEADLINE<br />
                                    {project.deadline}
                                </span>
                                <a
                                    href="#"
                                    className="bg-lime-400 hover:bg-lime-500 text-black w-8 h-8 rounded-full flex items-center justify-center ml-4 shadow-md"
                                >
                                    ↗
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default About;
