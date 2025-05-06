'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-gray-50 text-center"
        >
            <motion.h2
                className="text-4xl md:text-5xl font-bold font-serif mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                I'm a passionate UI/UX designer with a strong background in visual design, interaction, and prototyping. I craft digital products that are user-centered and visually polished.
            </motion.p>
        </section>
    );
};

export default About;
