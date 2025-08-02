import Link from "next/link";
import Image from "next/image";
import NavItems from "./navitems";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor pointer">
                    <h1>Protagoni.st</h1>
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <p>Sign In</p>
            </div>
        </nav>
    )
}

export default NavBar