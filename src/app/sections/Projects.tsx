'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Yoga Bliss Landing Page',
        image: '/image/1.png',
        link: 'https://yoga-bliss-hazel.vercel.app/en',
        description: 'Multilingual landing page with contact form and animations.',
    },
    {
        title: 'Portfolio Project (In Progress)',
        image: '/images/portfolio.png',
        link: '#',
        description: 'Personal portfolio site with smooth UX and project gallery.',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="text-center mb-12">
                <motion.h2 className="text-4xl md:text-5xl font-bold font-serif mb-4" initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1, duration: 0.6 }}
                    viewport={{ once: true }}>Projects</motion.h2>
                <motion.p className="text-gray-600 text-lg" initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}>Some of my recent works</motion.p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        key={index}
                        className="block group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm">{project.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
