"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

// rfc
export default function Navbar({ href, children }: {
    href: string,
    children: React.ReactNode
}) {
    const pathname = usePathname()


    return (
        <header className="bg-blue-600 text-white p-4 flex">
            <Link href="/">
                <h1 className="text-3xl font-bold">
                    My App
                </h1>
            </Link>
            <ul className="flex space-x-4 ml-8 mt-2">
                <li>
                    <Link href="/" className={pathname === "/" ? "text-amber-500" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={pathname === "/blog" ? "text-amber-500" : ""}>Blog</Link>
                </li>
                <li>
                    <Link href="/blog/post" className={pathname === "/blog/post" ? "text-amber-500" : ""}>Post</Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === "/contact" ? "text-amber-500" : ""}>Contact</Link>
                </li>
                <li>
                    <Link href="/about" className={pathname === "/about" ? "text-amber-500" : ""}>About</Link>
                </li>
                <li>
                    <Link href="/counter" className={pathname === "/counter" ? "text-amber-500" : ""}>Counter</Link>
                </li>
                <li>
                    <Link href="/login" className={pathname === "/login" ? "text-amber-500" : ""}>Login</Link>
                </li>
            </ul>
        </header>
    )
}