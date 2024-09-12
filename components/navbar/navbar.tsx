import Link from 'next/link';
import Image from 'next/image';

import LinkedInIcon from '@/public/In-White-128.png';
import GithubIcon from '@/public/github-mark-white.svg';
import EmailIcon from '@/public/email.svg';

export default function Navbar() {
    return (
        <nav className="fixed z-1 top-0 left-0 p-5 w-full flex items-center justify-between">
            <div className="flex-1 text-center space-x-20">
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/about" className="hover:underline">Resume</Link>
            </div>
            <div className="flex-1 text-center">
                <Link href="/" className="hover:underline">LIAMC.XYZ</Link>
            </div>
            <div className="flex-1 flex place-content-center space-x-20">
                <Link href={'https://linkedin.com'} target="_blank" rel="noopener noreferrer">
                    <Image src={LinkedInIcon} alt="My LinkedIn" width={64} height={64}/>
                </Link>
                <Link href={'https://github.com'} target="_blank" rel="noopener noreferrer">
                    <Image src={GithubIcon} alt="My Github" width={64} height={64}/>
                </Link>
                <Link href={'mailto:coxx9803@mylaurier.ca'} className="invert">
                    <Image src={EmailIcon} alt="Email me!" width={64} height={64}/>
                </Link>
            </div>
        </nav>
    );
}
