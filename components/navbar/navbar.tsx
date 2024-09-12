import Link from 'next/link';

export default function Navbar() {
    return (<nav className="fixed top-0 left-0 mx-4 mt-4 w-full p-4 flex items-center justify-between px-4 py-2">
        <nav className="flex-1 items-center justify-between space-x-4">
            <Link href="/about" className="text-4xl hover:underline">About</Link>
            <Link href="/projects" className="text-4xl hover:underline">Projects</Link>
            <Link href="/about" className="text-4xl hover:underline">Resume</Link>
        </nav>)
        <Link href="/" className="flex-1 text-8xl text-center hover:underline">LIAMC.XYZ</Link>
        <Link href="/" className="flex-1 text-4xl text-right border-2 border-white rounded-lg p-4 space-x-4 hover:underline">CONTACT</Link>
    </nav>);
}
