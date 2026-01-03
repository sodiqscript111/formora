import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/femoralogo.png'

// Navigation links data
const navLinks = [
    { href: '/#home', label: 'HOME', isRoute: false },
    { href: '/#services', label: 'SERVICES', isRoute: false },
    { href: '/website-works', label: 'WORKS', isRoute: true },
    { href: '/#about', label: 'ABOUT', isRoute: false },
]

// Navigation bar component - used on all pages
export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[80%] max-md:w-[92%] bg-brand-matte rounded-4xl max-md:rounded-2xl px-10 max-md:px-6 py-3 flex justify-between items-center z-[1000] shadow-float">
                <Link to="/" className="flex items-center gap-2 font-inter font-bold text-lg text-brand-top tracking-tight no-underline">
                    <img src={logo} alt="Formora Logo" className="w-12 h-12 rounded-full object-cover" />
                    FORMORA
                </Link>

                <div className="flex gap-8 items-center max-md:hidden">
                    <a href="/#home" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">HOME</a>
                    <a href="/#services" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">SERVICES</a>
                    <Link to="/website-works" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">WORKS</Link>
                    <a href="/#about" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">ABOUT</a>
                </div>

                {/* Modern Hamburger Button */}
                <button
                    className="hidden max-md:flex flex-col justify-center items-center w-10 h-10 cursor-pointer bg-transparent border-none p-0 z-[1001] relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        className="block w-6 h-[2px] bg-brand-top absolute"
                        animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                    <motion.span
                        className="block w-6 h-[2px] bg-brand-top absolute"
                        animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="block w-6 h-[2px] bg-brand-top absolute"
                        animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                </button>
            </nav>

            {/* Modern Fullscreen Sidebar Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop with blur */}
                        <motion.div
                            className="fixed inset-0 z-[998] backdrop-blur-md"
                            style={{ backgroundColor: 'rgba(47, 47, 43, 0.4)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Sleek Sidebar Panel */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-[85%] max-w-[380px] z-[999] flex flex-col"
                            style={{
                                background: 'linear-gradient(135deg, rgba(215, 212, 203, 0.95) 0%, rgba(200, 197, 188, 0.98) 100%)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '-10px 0 60px rgba(0, 0, 0, 0.15)',
                            }}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {/* Decorative gradient accent line */}
                            <div
                                className="absolute left-0 top-0 w-[3px] h-full"
                                style={{
                                    background: 'linear-gradient(180deg, #8B7355 0%, #A08B6E 30%, #C4B59A 60%, #D7D4CB 100%)',
                                }}
                            />

                            {/* Header area */}
                            <div className="pt-28 pb-8 px-10 border-b border-[#2f2f2b]/10">
                                <motion.p
                                    className="font-inter text-xs tracking-[0.3em] text-[#2f2f2b]/50 uppercase"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Navigation
                                </motion.p>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 flex flex-col justify-center px-10 -mt-10">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{
                                            delay: 0.1 + index * 0.08,
                                            duration: 0.4,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        className="group"
                                    >
                                        {link.isRoute ? (
                                            <Link
                                                to={link.href}
                                                className="block py-5 font-fraunces text-3xl font-medium text-[#2f2f2b] no-underline relative overflow-hidden transition-all duration-300 hover:translate-x-3"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span className="relative z-10 flex items-center gap-4">
                                                    <span className="w-0 h-[2px] bg-[#8B7355] transition-all duration-300 group-hover:w-6" />
                                                    {link.label}
                                                </span>
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="block py-5 font-fraunces text-3xl font-medium text-[#2f2f2b] no-underline relative overflow-hidden transition-all duration-300 hover:translate-x-3"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span className="relative z-10 flex items-center gap-4">
                                                    <span className="w-0 h-[2px] bg-[#8B7355] transition-all duration-300 group-hover:w-6" />
                                                    {link.label}
                                                </span>
                                            </a>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer area with social/contact hint */}
                            <motion.div
                                className="px-10 py-8 border-t border-[#2f2f2b]/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className="font-inter text-xs tracking-wide text-[#2f2f2b]/50 mb-3">
                                    Get in touch
                                </p>
                                <a
                                    href="mailto:hello@formora.com"
                                    className="font-inter text-sm text-[#2f2f2b] no-underline hover:text-[#8B7355] transition-colors"
                                >
                                    hello@formora.com
                                </a>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

// Header component with hero section - used on home page
export default function Header() {
    return (
        <header className="relative min-h-screen flex items-center justify-center gradient-header noise-overlay">
            <div className="flex flex-col items-center text-center max-w-[800px] px-8 z-20">
                <h1 className="font-fraunces text-7xl max-md:text-5xl font-medium m-0 p-0 leading-[1.1] tracking-tight text-brand-dark animate-float">Formora</h1>

                <p className="font-inter text-[1.1rem] font-normal opacity-80 mt-6 mb-10 max-w-[500px] leading-[1.6] text-brand-dark">
                    We build digital experiences that feel as refined as they are functional.
                    A calm approach to complex problems.
                </p>

                <button className="bg-brand-dark text-white border-none px-8 py-3 font-inter text-[0.95rem] font-medium rounded-full cursor-pointer hover:scale-105 transition-transform shadow-lg">
                    Let's talk
                </button>
            </div>
        </header>
    )
}
