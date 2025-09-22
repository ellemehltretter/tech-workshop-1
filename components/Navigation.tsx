import Link from "next/link";

const Navigation = () => {
    return(
        <nav className="flex gap-4 p-4 border-spacing-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Project</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}

export default Navigation;