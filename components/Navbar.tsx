import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image src="/logo.png" height="90" width="120" alt="Logo"/>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/monsters">Monsters</Link>
    </nav>
  )
}

export default Navbar
