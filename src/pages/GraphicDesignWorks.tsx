import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Graphic design projects data
const projects = [
    {
        name: 'Coca Cola',
        color: '#E63946',
        description: 'Bold social media designs capturing the iconic brand essence',
        images: [
            '/assets/Coca Cola Social media designs/Coca cola smd1 1.jpg',
            '/assets/Coca Cola Social media designs/coca cola smd2 1.jpg',
            '/assets/Coca Cola Social media designs/coca cola smd3 1.jpg',
            '/assets/Coca Cola Social media designs/coca cola smd4 1.jpg',
            '/assets/Coca Cola Social media designs/coca cola smd5 1.jpg',
        ]
    },
    {
        name: 'Nimi Burger',
        color: '#F4A261',
        description: 'Appetizing visuals for a modern burger brand',
        images: [
            '/assets/Nimi Burger Social media Design/Frame 19.png',
            '/assets/Nimi Burger Social media Design/Frame 20.png',
            '/assets/Nimi Burger Social media Design/Frame 21.png',
            '/assets/Nimi Burger Social media Design/Frame 22.png',
            '/assets/Nimi Burger Social media Design/Frame 23.png',
        ]
    },
    {
        name: 'Passion Consults',
        color: '#2A9D8F',
        description: 'Professional consulting brand with elegant carousel designs',
        images: [
            '/assets/Passion Consults Single and Carouse SMD/Passion consult SMD Oct1.1.jpg',
            '/assets/Passion Consults Single and Carouse SMD/Passion consult SMD sep15.jpg',
            '/assets/Passion Consults Single and Carouse SMD/Passion consult SMD sep26.jpg',
            '/assets/Passion Consults Single and Carouse SMD/Passion consult SMD sep30.jpg',
        ]
    },
    {
        name: 'Sewanu Cakes',
        color: '#DDA0DD',
        description: 'Sweet and elegant designs for a premium cake brand',
        images: [
            '/assets/Sewanu Cakes Social media Designs/Frame 1.png',
            '/assets/Sewanu Cakes Social media Designs/Frame 2.png',
            '/assets/Sewanu Cakes Social media Designs/Frame 3.png',
            '/assets/Sewanu Cakes Social media Designs/Frame 4.png',
        ]
    }
]

// Project Section Component
interface ProjectSectionProps {
    project: typeof projects[0]
    index: number
}

function ProjectSection({ project, index }: ProjectSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [selectedImage, setSelectedImage] = useState(0)

    const slideFromLeft = index % 2 === 0
    const sectionDelay = index * 0.15
    const contentBaseDelay = sectionDelay + 0.4

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

            {/* Project Section */}
            <motion.section
                className="py-20 max-md:py-14 relative overflow-hidden"
                style={{ backgroundColor: project.color + '25' }}
                initial={{ x: slideFromLeft ? '-100%' : '100%', opacity: 0 }}
                animate={isInView ? { x: '0%', opacity: 1 } : { x: slideFromLeft ? '-100%' : '100%', opacity: 0 }}
                transition={{ duration: 0.7, delay: sectionDelay, ease: 'easeOut' }}
            >
                <div className="max-w-[1400px] mx-auto px-10 max-md:px-6">
                    {/* Project Header */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: contentBaseDelay, ease: 'easeOut' }}
                    >
                        <h2 className="font-fraunces text-[2.5rem] max-md:text-[2rem] font-medium text-[#2f2f2b] mb-3">
                            {project.name}
                        </h2>
                        <p className="font-inter text-[1.05rem] text-[#2f2f2b] opacity-70">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Main Featured Image */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: contentBaseDelay + 0.15, ease: 'easeOut' }}
                    >
                        <div className="bg-white/60 p-6 max-md:p-4 rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden">
                            <img
                                src={project.images[selectedImage]}
                                alt={`${project.name} design ${selectedImage + 1}`}
                                className="w-full max-h-[600px] object-contain rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Thumbnail Gallery */}
                    <motion.div
                        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: contentBaseDelay + 0.3, ease: 'easeOut' }}
                    >
                        {project.images.map((image, imgIndex) => (
                            <button
                                key={imgIndex}
                                onClick={() => setSelectedImage(imgIndex)}
                                className={`flex-shrink-0 w-28 h-28 max-md:w-20 max-md:h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${selectedImage === imgIndex
                                        ? 'border-[#2f2f2b] scale-105 shadow-lg'
                                        : 'border-transparent opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${project.name} thumbnail ${imgIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

export default function GraphicDesignWorks() {
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
                    Graphic Design
                </h1>
                <p className="font-inter text-[1.15rem] text-[#2f2f2b] opacity-70 mt-4 max-w-[600px]">
                    Visual communication that captures attention and delivers your message with clarity and elegance.
                </p>
            </motion.div>

            {/* Project Sections */}
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectSection key={project.name} project={project} index={index} />
                ))}
            </div>

            {/* Bottom separator */}
            <div className="w-full h-[1px] bg-[#2f2f2b]" />
        </div>
    )
}
