import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
export const CareerSection = () => {


    const careerData = [
        {
            id: 1,
            role: "Vastu Expert",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764636/Vector_1_toodao.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        },
        {
            id: 2,
            role: "3D Artist",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764635/Frame_13_3_hrngbi.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 3,
            role: "Junior Architect",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764637/Frame_13_2_v84li4.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 4,
            role: "Civil Engineer",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764321/Vector_f80vft.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 5,
            role: "3D Visualizer",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764507/Group_fc2agu.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 6,
            role: "Space Planner",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764638/Frame_13_1_enox93.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        },
        {
            id: 7,
            role: "Architect",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764634/Frame_13_uhvvnf.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        },
        {
            id: 8,
            role: "Vastu Expert",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764636/Vector_1_toodao.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        },
        {
            id: 9,
            role: "3D Artist",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764635/Frame_13_3_hrngbi.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 10,
            role: "Junior Architect",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764637/Frame_13_2_v84li4.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 11,
            role: "Civil Engineer",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764321/Vector_f80vft.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 12,
            role: "3D Visualizer",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764507/Group_fc2agu.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }, {
            id: 13,
            role: "Space Planner",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764638/Frame_13_1_enox93.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        },
        {
            id: 14,
            role: "Architect",
            image: "https://res.cloudinary.com/dzpezyxt2/image/upload/v1764764634/Frame_13_uhvvnf.png",
            color: "rgb(59, 130, 246)",
            opacity: 1
        }
    ]

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    return (
        <>
            <section className=" px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto  text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Unlock Your Career Potential
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                        Thousands of professionals have already found the right job with us faster, easier, and with less stress
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
                <div className="relative max-w-full overflow-hidden">

                    {/* CIRCLE/OVAL FADE LAYER */}
                    <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle,rgba(255,255,255,0)_40%,rgba(255,255,255,1)_100%)]">
                    </div>
                    {/* --- YOUR MARQUEES --- */}
                    <div className="relative z-10">
                        {/* TOP – Left */}
                        <Marquee className="py-2">
                            {shuffleArray(careerData).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2 flex items-center gap-2"
                                >
                                    <Image
                                        width={14}
                                        height={14}
                                        src={item.image}
                                        alt={item.role}
                                        className="h-4 w-4 object-contain"
                                    />
                                    {item.role}
                                </div>
                            ))}
                        </Marquee>

                        {/* SECOND – Right */}
                        <Marquee className="py-2" direction="right">
                            {shuffleArray(careerData).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2 flex items-center gap-2"
                                >
                                    <Image
                                        width={14}
                                        height={14}
                                        src={item.image}
                                        alt={item.role}
                                        className="h-4 w-4 object-contain"
                                    />
                                    {item.role}
                                </div>
                            ))}
                        </Marquee>

                        {/* THIRD – Left */}
                        <Marquee className="py-2">
                            {shuffleArray(careerData).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2 flex items-center gap-2"
                                >
                                    <Image
                                        width={14}
                                        height={14}
                                        src={item.image}
                                        alt={item.role}
                                        className="h-4 w-4 object-contain"
                                    />
                                    {item.role}
                                </div>
                            ))}
                        </Marquee>

                        {/* FOURTH – Right */}
                        <Marquee className="py-2" direction="right">
                            {shuffleArray(careerData).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mx-2 flex items-center gap-2"
                                >
                                    <Image
                                        width={14}
                                        height={14}
                                        src={item.image}
                                        alt={item.role}
                                        className="h-4 w-4 object-contain"
                                    />
                                    {item.role}
                                </div>
                            ))}
                        </Marquee>
                    </div>

                </div>



            </section>
        </>
    )
}

