import Link from 'next/link';

export default function Navbar() {
    return (<nav className="fixed z-1 top-0 left-0 p-5 w-full flex items-center justify-between">
        <nav className="flex-1 text-center justify-between space-x-20">
            <Link href="/about" className="text-4xl hover:underline">About</Link>
            <Link href="/projects" className="text-4xl hover:underline">Projects</Link>
            <Link href="/about" className="text-4xl hover:underline">Resume</Link>
        </nav>
        <nav className="flex-1 text-center">
            <Link href="/" className="text-8xl hover:underline">LIAMC.XYZ</Link>
        </nav>
        <nav className="flex-1 text-right">
            <Link href="/" className="text-4xl border-2 border-white rounded-lg p-4 space-x-4 hover:underline">CONTACT</Link>
        </nav>
    </nav>);
}
