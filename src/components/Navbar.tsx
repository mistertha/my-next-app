import Link from "next/link"

// rfc
export default function Navbar() {
    return (
        <header className="bg-blue-600 text-white p-4 flex">
            <Link href="/">
                <h1 className="text-3xl font-bold">
                    My App
                </h1>
            </Link>
            <ul className="flex space-x-4 ml-8 mt-2">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/blog/post">Post</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/counter">Counter</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </header>
    )
}