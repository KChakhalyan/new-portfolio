'use client';

import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section className="bg-[#1a1a1a] px-6 pb-24 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className={`bg-[#252525] rounded-2xl p-6 flex flex-col justify-between shadow-lg relative min-h-[200px] hover:shadow-xl transition`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        </div>

                        <div className="mt-6 text-sm text-gray-400 flex justify-between items-center">
                            <span>PROJECT DEADLINE<br />{project.deadline}</span>
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
        </section>
    );
};

export default Projects;
