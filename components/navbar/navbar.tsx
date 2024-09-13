import Link from 'next/link';
import Image from 'next/image';

import LinkedInIcon from '@/public/In-White-128.png';
import GithubIcon from '@/public/github-mark-white.svg';
import EmailIcon from '@/public/email.svg';

export default function Navbar() {
    return (
        <nav className="fixed z-1 top-0 left-0 p-5 w-full flex items-center justify-between">
            <div className="flex-1 text-center space-x-20">
                <Link href="/about" className="hover:underline text-lg md:text-xl lg:text-3xl 2xl:text-4xl">About</Link>
                <Link href="/projects" className="hover:underline text-lg md:text-xl lg:text-3xl 2xl:text-4xl">Projects</Link>
                <Link href="/about" className="hover:underline text-lg md:text-xl lg:text-3xl 2xl:text-4xl">Resume</Link>
            </div>
            <div className="flex-1 text-center">
                <Link href="/" className="hover:underline text-xl md:text-3xl lg:text-7xl 2xl:text-8xl">LIAMC.CA</Link>
            </div>
            <div className="flex-1 flex place-content-center space-x-20">
                <Link href={'https://www.linkedin.com/in/liamac/'} target="_blank" rel="noopener noreferrer">
                    <Image src={LinkedInIcon} alt="My LinkedIn" width={64} height={64} className="min-w-4 min-h-4"/>
                </Link>
                <Link href={'https://github.com/LiamACox'} target="_blank" rel="noopener noreferrer">
                    <Image src={GithubIcon} alt="My Github" width={64} height={64} className="min-w-4 min-h-4"/>
                </Link>
                <Link href={'mailto:coxx9803@mylaurier.ca'}>
                    <Image src={EmailIcon} alt="Email me!" width={64} height={64} className="invert min-w-4 min-h-4"/>
                </Link>
            </div>
        </nav>
    );
}
