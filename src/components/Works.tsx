import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const works = [
    {
        title: 'Website Development',
        description: 'Bespoke digital platforms built with precision and performance in mind. We create experiences that resonate.',
        image: '/assets/website_dev.png',
    },
    {
        title: 'Branding',
        description: 'Elevating identities through strategic design and storytelling. We define the soul of your brand.',
        image: '/assets/branding.png',
    },
    {
        title: 'Graphic Design',
        description: 'Visual communication that captures attention and delivers your message with clarity and elegance.',
        image: '/assets/graphic_design.png',
    }
]

// Animation variants for sequential fade-in + upward movement
const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1], // Subtle, elegant cubic-bezier
        }
    })
}


interface WorkRowProps {
    work: typeof works[0]
    index: number
}

function WorkRow({ work, index }: WorkRowProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div
            ref={ref}
            className={`flex items-center justify-between gap-24 max-md:gap-10 max-md:flex-col max-md:text-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
        >
            <div className="flex-1 max-w-[480px] max-md:max-w-full">
                <motion.h3
                    className="font-inter text-[2.8rem] max-md:text-[2.2rem] font-bold text-brand-dark mb-6 tracking-tight"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0}
                >
                    {work.title}
                </motion.h3>
                <motion.p
                    className="font-inter text-[1.15rem] text-brand-dark opacity-80 leading-relaxed mb-12"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0.15}
                >
                    {work.description}
                </motion.p>
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0.3}
                >
                    <Link
                        to="/our-works"
                        className="inline-block bg-transparent border border-brand-dark text-brand-dark px-9 py-3 font-inter text-[0.95rem] font-medium rounded-md cursor-pointer hover:bg-brand-dark hover:text-white transition-all duration-300"
                    >
                        View Works
                    </Link>
                </motion.div>
            </div>

            <div className="flex-[1.4] flex justify-center w-full">
                <div className="bg-brand-frame p-10 max-md:p-6 rounded-xl shadow-photo ring-1 ring-brand-ash/50 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="rounded-sm overflow-hidden shadow-inner flex">
                        <img src={work.image} alt={work.title} className="w-full h-auto block object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Works() {
    return (
        <section className="bg-works-bg py-40 min-h-screen noise-overlay">
            <div className="max-w-[1400px] mx-auto px-10 max-md:px-6">
                <h2 className="font-fraunces text-[3.5rem] max-md:text-[2.8rem] font-medium text-brand-dark mb-32 max-md:mb-20 text-left max-md:text-center">Our Works</h2>

                <div className="flex flex-col gap-48 max-md:gap-16">
                    {works.map((work, index) => (
                        <WorkRow key={index} work={work} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
