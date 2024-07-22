import Link from "next/link";
export default function Header() {
    return (
        <header class="bg-white shadow-sm ">
        <div class="container mt-2 d-flex justify-content-between align-items-center">
           <Link  class="mt-1 text-decoration-none text-dark" href="/"><h4>Blog</h4></Link> 
            <nav class="d-flex mt-">
                <Link href="/" class="text-dark me-3 text-decoration-none">Home</Link>
                <Link href="/about" class="text-dark me-3 text-decoration-none">About</Link>
                <Link href="/contact" class="text-dark text-decoration-none">Contact</Link>
            </nav>
        </div>
    </header>
    );
}
