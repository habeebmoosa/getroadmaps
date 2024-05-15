import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-purple-50 h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <header className="flex flex-col justify-center items-center mt-36">
          <div className="flex justify-center items-center text-center">
            <h1 data-animate="title" className="hidden md:block text-6xl font-bold"> Welcome to <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Roadmap Generator</span></h1>
          </div>
          <div className="mt-8 px-1">
            <p className="text-xl max-w-[40rem] text-center">
              A tool that generates a roadmap based on the user's input prompt.
            </p>
          </div>
        </header>
        <div className="mt-8">
          <Link href="/roadmap">
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
      <footer className="flex justify-center items-center mt-64">
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://habeebmoosa.vercel.app" // Add your GitHub profile link here
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Habeeb Moosa
          </a>
        </p>
      </footer>
    </main>
  );
}
