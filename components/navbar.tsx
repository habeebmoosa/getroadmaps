import Link from "next/link"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="p-2">
            <div className="sm:px-12 mx-auto flex items-center justify-between p-4 bg-white shadow-lg rounded-2xl">
                <Link href={"/"} className="flex flex-row items-center gap-2">
                    <Image
                        src={"/icon.svg"}
                        alt="Get RoadMaps"
                        width={40}
                        height={40}
                    />
                    <h1 className="hidden sm:block bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text text-2xl tracking-tight text-transparent font-bold">Get RoadMaps</h1>
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
            </div>
        </nav>
    )
}