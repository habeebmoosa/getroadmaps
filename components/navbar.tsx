import Link from "next/link"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <nav className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-30">
            <Link href={"/"} className="flex flex-row items-center">
                <h1 className="hidden sm:block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-bold">Roadmap Generator</h1>

            </Link>
            <div>
                <SignedOut>
                    <SignInButton>
                        <Button>Sign in</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}