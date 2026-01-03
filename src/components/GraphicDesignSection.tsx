import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const graphicDesignBrands = [
    {
        name: 'Nimi Burger',
        color: '#F5D6C6',
        image: '/assets/Nimi Burger Social media Design/Frame 19.png',
        instagram: 'https://instagram.com/nimiburger',
    },
    {
        name: 'Passion Consults',
        color: '#C6D4E3',
        image: '/assets/Passion Consults Single and Carouse SMD/carouselSep24_ passionconsults.jpg',
        instagram: 'https://instagram.com/passionconsults',
    },
    {
        name: 'Coca Cola',
        color: '#E3C6C6',
        image: '/assets/Coca Cola Social media designs/Coca cola smd1 1.jpg',
        instagram: 'https://instagram.com/cocacola',
    },
    {
        name: 'Sewanu Cakes',
        color: '#D6E3C6',
        image: '/assets/Sewanu Cakes Social media Designs/Frame 1.png',
        instagram: 'https://instagram.com/sewanucakes',
    }
]

function InstagramIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    )
}

interface BrandSectionProps {
    brand: typeof graphicDesignBrands[0]
    index: number
}

function GraphicBrandSection({ brand, index }: BrandSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const slideFromLeft = index % 2 === 0
    const sectionDelay = index * 0.15
    const contentBaseDelay = sectionDelay + 0.5

    return (
        <div ref={ref}>
            {index > 0 && (
                <motion.div
                    className="w-full h-[1px] bg-[#2f2f2b]"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: sectionDelay }}
                />
            )}

            <motion.section
                className="py-16 max-md:py-12 relative overflow-hidden"
                style={{ backgroundColor: brand.color }}
                initial={{ x: slideFromLeft ? '-100%' : '100%', opacity: 0 }}
                animate={isInView ? { x: '0%', opacity: 1 } : { x: slideFromLeft ? '-100%' : '100%', opacity: 0 }}
                transition={{ duration: 0.7, delay: sectionDelay, ease: 'easeOut' }}
            >
                <div className="max-w-[1400px] mx-auto px-10 max-md:px-6">
                    <div className="flex items-center justify-between gap-16 max-md:flex-col max-md:gap-10">
                        <motion.div
                            className="flex-shrink-0 w-[400px] max-md:w-full"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: contentBaseDelay, ease: 'easeOut' }}
                        >
                            <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        <div className="flex-1 max-w-[400px] max-md:text-center">
                            <motion.h2
                                className="font-fraunces text-[2.2rem] max-md:text-[1.8rem] font-medium text-[#2f2f2b] mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: contentBaseDelay + 0.1, ease: 'easeOut' }}
                            >
                                {brand.name}
                            </motion.h2>

                            <motion.a
                                href={brand.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#2f2f2b] hover:opacity-70 transition-opacity duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: contentBaseDelay + 0.2, ease: 'easeOut' }}
                            >
                                <InstagramIcon />
                                <span className="font-inter text-[0.95rem]">Instagram</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default function GraphicDesignSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <section className="overflow-x-hidden" style={{ backgroundColor: '#D7D4CB' }}>
            <motion.div
                ref={ref}
                className="max-w-[1400px] mx-auto px-10 max-md:px-6 pt-32 pb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className="font-fraunces text-[3.5rem] max-md:text-[2.8rem] font-medium text-[#2f2f2b] text-left">
                    Graphic Design
                </h2>
            </motion.div>

            <div className="flex flex-col">
                {graphicDesignBrands.map((brand, index) => (
                    <GraphicBrandSection key={brand.name} brand={brand} index={index} />
                ))}
            </div>

            <div className="w-full h-[1px] bg-[#2f2f2b]" />
        </section>
    )
}
