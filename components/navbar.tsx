import Link from "next/link";
import Image from "next/image";
import NavItems from "./navitems";
<<<<<<< HEAD
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
=======
>>>>>>> 550f48e42e530d5730ccc1ceb4fab1f3fc22ef4e

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
<<<<<<< HEAD
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
=======
                <p>Sign In</p>
>>>>>>> 550f48e42e530d5730ccc1ceb4fab1f3fc22ef4e
            </div>
        </nav>
    )
}

export default NavBar