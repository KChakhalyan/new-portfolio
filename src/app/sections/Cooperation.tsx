'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        title: 'What are the project deadlines?',
        description: 'Project deadlines depend on scope and complexity, but typically range from 2 to 6 weeks. You’ll receive a timeline at the proposal stage.',
    },
    {
        title: 'What exactly is included in my services?',
        description: 'I offer web design, UI/UX, branding, prototyping, and basic development. Custom service bundles are available upon request.',
    },
    {
        title: 'How does the cooperation process work?',
        description: 'We begin with a discovery call, followed by proposal, design drafts, revisions, and final delivery. I use Trello or Notion for progress tracking.',
    },
    {
        title: 'What is my approach to prices?',
        description: 'I offer fixed pricing for clarity, with flexible add-ons. No hidden fees — transparent quotes and clear expectations.',
    },
];

const Cooperation = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Закрытие при клике вне модального окна
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setActiveIndex(null);
            }
        }

        if (activeIndex !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeIndex]);

    return (
        <section className="bg-[#1a1a1a] text-white px-6 py-24 rounded-t-[2rem]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                        Details Of<br />Cooperation
                    </h2>
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                    Here you will find important information about projects, deadlines and services offered.
                </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {questions.map((q, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="flex justify-between items-center w-full bg-[#252525] text-gray-200 px-6 py-4 rounded-full border border-gray-700 hover:border-lime-400 transition text-left cursor-pointer relative group"
                    >
                        <span className="text-sm md:text-base">{q.title}</span>
                        <span className="bg-lime-400 hover:bg-lime-500 text-black w-8 h-8 rounded-full flex items-center justify-center ml-4 shadow">
                            ↗
                        </span>
                    </button>
                ))}
            </div>

            {/* Animated Modal */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            ref={modalRef}
                            className="bg-[#1a1a1a] rounded-2xl max-w-xl w-full p-8 text-white relative shadow-lg "
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 30, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setActiveIndex(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="text-2xl font-semibold mb-4">{questions[activeIndex].title}</h3>
                            <p className="text-gray-300 leading-relaxed">{questions[activeIndex].description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Cooperation;
