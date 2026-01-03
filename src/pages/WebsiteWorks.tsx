import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FolderCard from '../components/FolderCard'

// Brand data configuration for website works
const brands = [
    {
        name: 'The Flourishing Treats',
        color: '#F5C6C6',
        image: '/assets/Theflorishingtreats/Screenshot 2025-12-21 214643.png',
        instagram: 'https://instagram.com/theflourishingtreats',
        website: 'https://theflourishingtreats.com'
    },
    {
        name: 'Todos Digitals',
        color: '#C6B8E3',
        image: '/assets/Todosdigitals/Screenshot 2025-12-21 214156.png',
        instagram: 'https://instagram.com/todosdigitals',
        website: 'https://todosdigitals.com'
    },
    {
        name: 'Robo Fitness',
        color: '#B8D4E3',
        image: '/assets/robofitness/Screenshot 2025-12-21 211938.png',
        instagram: 'https://instagram.com/robofitness',
        website: 'https://robofitness.com'
    },
    {
        name: 'Rolak Comfort Gardens',
        color: '#C6E3C6',
        image: '/assets/rolakcomfortgardens/Screenshot 2025-12-21 213215.png',
        instagram: 'https://instagram.com/rolakcomfortgardens',
        website: 'https://rolakcomfortgardens.com'
    },
    {
        name: 'Zuch',
        color: '#E3D4B8',
        image: '/assets/zuch/Screenshot 2025-12-21 213519.png',
        instagram: 'https://instagram.com/zuch',
        website: 'https://zuch.com'
    }
]

// Instagram SVG icon component
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

// Brand Section Component with animations
interface BrandSectionProps {
    brand: typeof brands[0]
    index: number
}

function BrandSection({ brand, index }: BrandSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Alternate slide direction: even from left, odd from right
    const slideFromLeft = index % 2 === 0
    const sectionDelay = index * 0.15 // Stagger sections
    const contentBaseDelay = sectionDelay + 0.5 // After section lands

    return (
        <div ref={ref}>
            {/* Separator line */}
            {index > 0 && (
                <motion.div
                    className="w-full h-[1px] bg-[#2f2f2b]"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: sectionDelay }}
                />
            )}

            {/* Brand Section */}
            <motion.section
                className="py-16 max-md:py-12 relative overflow-hidden"
                style={{ backgroundColor: brand.color }}
                initial={{ x: slideFromLeft ? '-100%' : '100%', opacity: 0 }}
                animate={isInView ? { x: '0%', opacity: 1 } : { x: slideFromLeft ? '-100%' : '100%', opacity: 0 }}
                transition={{ duration: 0.7, delay: sectionDelay, ease: 'easeOut' }}
            >
                <div className="max-w-[1400px] mx-auto px-10 max-md:px-6">
                    <div className="flex items-center justify-between gap-16 max-md:flex-col max-md:gap-10">
                        {/* Left: Folder with brand image */}
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: contentBaseDelay, ease: 'easeOut' }}
                        >
                            <FolderCard
                                brandColor={brand.color}
                                brandImage={brand.image}
                                brandName={brand.name}
                                size="large"
                            />
                        </motion.div>

                        {/* Right: Brand info */}
                        <div className="flex-1 max-w-[400px] max-md:text-center">
                            <motion.h2
                                className="font-fraunces text-[2.2rem] max-md:text-[1.8rem] font-medium text-[#2f2f2b] mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: contentBaseDelay + 0.1, ease: 'easeOut' }}
                            >
                                {brand.name}
                            </motion.h2>

                            {/* Instagram link */}
                            <motion.a
                                href={brand.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#2f2f2b] hover:opacity-70 transition-opacity duration-300 mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: contentBaseDelay + 0.2, ease: 'easeOut' }}
                            >
                                <InstagramIcon />
                                <span className="font-inter text-[0.95rem]">Instagram</span>
                            </motion.a>

                            {/* Website link */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: contentBaseDelay + 0.3, ease: 'easeOut' }}
                            >
                                <a
                                    href={brand.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-inter text-[0.95rem] text-[#2f2f2b] underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity duration-300"
                                >
                                    Visit Website
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default function WebsiteWorks() {
    return (
        <div className="min-h-screen noise-overlay overflow-x-hidden" style={{ backgroundColor: '#D7D4CB' }}>
            {/* Page Header */}
            <motion.div
                className="max-w-[1400px] mx-auto px-10 max-md:px-6 pt-32 pb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h1 className="font-fraunces text-[3.5rem] max-md:text-[2.8rem] font-medium text-[#2f2f2b] text-left">
                    Website Works
                </h1>
                <p className="font-inter text-[1.15rem] text-[#2f2f2b] opacity-70 mt-4 max-w-[600px]">
                    Bespoke digital platforms built with precision and performance in mind.
                </p>
            </motion.div>

            {/* Brand Sections */}
            <div className="flex flex-col">
                {brands.map((brand, index) => (
                    <BrandSection key={brand.name} brand={brand} index={index} />
                ))}
            </div>

            {/* Bottom separator */}
            <div className="w-full h-[1px] bg-[#2f2f2b]" />
        </div>
    )
}
