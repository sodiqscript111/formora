import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="relative min-h-screen flex items-center justify-center gradient-header noise-overlay">
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[80%] max-md:w-[92%] bg-brand-matte rounded-4xl max-md:rounded-2xl px-10 max-md:px-6 py-3 flex justify-between items-center z-[1000] shadow-float">
                <a href="/" className="font-inter font-bold text-lg text-brand-top tracking-tight no-underline">FORMORA</a>

                <div className="flex gap-8 items-center max-md:hidden">
                    <a href="#home" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">HOME</a>
                    <a href="#services" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">SERVICES</a>
                    <a href="#works" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">WORKS</a>
                    <a href="#about" className="font-inter text-[0.75rem] font-medium text-brand-top tracking-widest opacity-70 hover:opacity-100 transition-opacity no-underline">ABOUT</a>
                </div>

                <button
                    className="hidden max-md:flex flex-col gap-[5px] cursor-pointer bg-none border-none p-[5px] z-[1001]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-[22px] h-[2px] bg-brand-top transition-all duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
                    <span className={`block w-[22px] h-[2px] bg-brand-top transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-[22px] h-[2px] bg-brand-top transition-all duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
                </button>
            </nav>

            <div className={`fixed top-[5.5rem] left-1/2 -translate-x-1/2 w-[92%] bg-brand-matte rounded-2xl py-10 px-6 flex flex-col items-center gap-8 z-[999] shadow-xl transition-all duration-400 ease-in-out ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-[10px]'}`}>
                <a href="#home" className="font-inter text-base font-medium text-brand-top tracking-[0.1em] opacity-80 hover:opacity-100 no-underline" onClick={() => setIsMenuOpen(false)}>HOME</a>
                <a href="#services" className="font-inter text-base font-medium text-brand-top tracking-[0.1em] opacity-80 hover:opacity-100 no-underline" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
                <a href="#works" className="font-inter text-base font-medium text-brand-top tracking-[0.1em] opacity-80 hover:opacity-100 no-underline" onClick={() => setIsMenuOpen(false)}>WORKS</a>
                <a href="#about" className="font-inter text-base font-medium text-brand-top tracking-[0.1em] opacity-80 hover:opacity-100 no-underline" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            </div>

            <div className="flex flex-col items-center text-center max-w-[800px] px-8 z-20">
                <h1 className="font-fraunces text-7xl max-md:text-5xl font-medium m-0 p-0 leading-[1.1] tracking-tight text-brand-dark animate-float">Formora</h1>

                <p className="font-inter text-[1.1rem] font-normal opacity-80 mt-6 mb-10 max-w-[500px] leading-[1.6] text-brand-dark">
                    We build digital experiences that feel as refined as they are functional.
                    A calm approach to complex problems.
                </p>

                <button className="bg-brand-dark text-white border-none px-8 py-3 font-inter text-[0.95rem] font-medium rounded-full cursor-pointer hover:scale-105 transition-transform shadow-lg">
                    Let’s talk
                </button>
            </div>
        </header>
    )
}
