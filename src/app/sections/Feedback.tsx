'use client';

import Image from 'next/image';

const reviews = [
    {
        text: "Eget quam augue at blandit odio libero sed. Amet convallis ultrices enim mattis purus ullamcorper mauris consequat...",
        name: 'June Stephens',
        role: 'IT Manager',
        image: '/images/avatar.jpeg', // Положи сюда изображение
    },
    {
        text: "Fringilla pretium justo, enim nunc nisi, amet nulla ultrices nec. Dignissim eros lacus vestibulum...",
        name: 'John Carter',
        role: 'Product Owner',
        image: '/images/avatar.jpeg',
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur. Aliquam ut blandit libero sed diam sed sed. Convallis ultrices enim mattis...",
        name: 'Lisa Brown',
        role: 'UX Consultant',
        image: '/images/avatar.jpeg',
    },
];

const Feedback = () => {
    return (
        <section className="bg-white px-6 py-24 text-gray-900 rounded-t-[2rem] mt-[-2rem]">
            <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                    Impressions<br />From My Clients
                </h2>
                <p className="text-gray-600 max-w-md">
                    Customer impressions are crucial to my work, and I’d be glad to share their experiences with you.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-[#252525] text-white p-6 rounded-2xl relative shadow-md flex flex-col justify-between min-h-[220px]">
                        {/* Stars */}
                        <div className="flex mb-4 text-lime-400 text-lg">★★★★★</div>

                        {/* Text */}
                        <p className="text-sm text-gray-300 mb-6">{review.text}</p>

                        {/* Profile and link */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <Image src={review.image} alt={review.name} width={40} height={40} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">{review.name}</div>
                                    <div className="text-xs text-gray-400">{review.role}</div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="bg-lime-400 hover:bg-lime-500 text-black w-8 h-8 rounded-full flex items-center justify-center shadow"
                            >
                                ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Feedback;
