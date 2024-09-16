'use client'

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for hamburger and close

import Link from 'next/link';
import Image from 'next/image';

import LinkedInIcon from '@/public/In-White-128.png';
import GithubIcon from '@/public/github-mark-white.svg';
import EmailIcon from '@/public/email.svg';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed z-1 top-0 left-0 p-5 w-full flex items-center justify-between">
            <div className="flex items-center">
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            <div className={`flex-1 flex space-x-5 px-5 md:px-0 md:space-x-10 max-sm:${isMenuOpen ? 'flex' : 'hidden'} md:justify-center`}>
                <Link href="/#about-section" className="hover:underline text-lg md:text-xl lg:text-3xl 2xl:text-4xl">About</Link>
                <Link href="/#projects-section" className="hover:underline text-lg md:text-xl lg:text-3xl 2xl:text-4xl">Projects</Link>
                <Link href="/#about-section" className="hover:underline text-lg md:text-xl lg:text-3xl 2xl:text-4xl">Resume</Link>
            </div>
            <div className="max-sm:hidden flex-1 text-center">
                <Link href="/#main-section" className="hover:underline text-2xl md:text-3xl lg:text-7xl 2xl:text-8xl">LIAMC.CA</Link>
            </div>
            <div className="hidden md:flex-1 md:flex place-content-center md:space-x-20">
                <Link href={'https://www.linkedin.com/in/liamac/'} target="_blank" rel="noopener noreferrer">
                    <Image src={LinkedInIcon} alt="My LinkedIn" width={56} height={56} className="min-w-4 min-h-4"/>
                </Link>
                <Link href={'https://github.com/LiamACox'} target="_blank" rel="noopener noreferrer">
                    <Image src={GithubIcon} alt="My Github" width={56} height={56} className="min-w-4 min-h-4"/>
                </Link>
                <Link href={'mailto:coxx9803@mylaurier.ca'}>
                    <Image src={EmailIcon} alt="Email me!" width={56} height={56} className="invert min-w-4 min-h-4"/>
                </Link>
            </div>
        </nav>
    );
}
