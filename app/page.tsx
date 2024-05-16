import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <div className="w-full bg-black">
        <p className="text-gray-300 text-center py-1">
          This is the developement version of [Get RoadMaps]. It has some bugs. Please report any issues or improvement to the developer.<a href={"https://docs.google.com/forms/d/e/1FAIpQLScNZ6vtlFMkmo0t_dWTx6CXfoEIZzm5KAjg-euCA49046beKw/viewform?usp=sf_link"} target={"_blank"} className="bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text tracking-tight text-transparent"> Report</a>
        </p>
      </div>
      <Navbar />

      <div className="flex flex-col items-center">
        <header className="flex flex-col justify-center items-center mt-36">
          <div className="flex justify-center items-center text-center">
          <h1 data-animate="title" className="md:hidden text-5xl font-bold"> Welcome to <br /><span className="bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text tracking-tight text-transparent">Get RoadMaps</span></h1>
            <h1 data-animate="title" className="hidden md:block text-6xl font-bold"> Welcome to <span className="bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text tracking-tight text-transparent">Get RoadMaps</span></h1>
          </div>
          <div className="mt-8 px-1">
            <p className="text-xl max-w-[40rem] text-center">
              Empower Your Journey: Let AI Craft Your Roadmap. Personalized, Efficient, and Future-Forward.
            </p>
          </div>
        </header>
        <div className="mt-8">
          <Link href="/roadmap">
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 mx-2">
        <Image
          src="/hero-image.png"
          alt="Code Editor"
          width={1000}
          height={600}
          unoptimized
          className="rounded-lg shadow-2xl"
        />
      </div>

      <section className="flex flex-col items-center mt-32">
        <div>
          <h2 className="text-4xl font-bold">How it works</h2>
        </div>
        <div className="mt-20 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-2 w-64 min-h-64 max-h-64 p-10 bg-emerald-300 text-gray-900 shadow-lg rounded-3xl">
            <h3 className="text-2xl font-bold">Write prompt</h3>
            <p className="text-lg max-w-[40rem] text-center text-gray-500">
              You can write your prompt in the text area provided and generate the roadmap.
            </p>
          </div>
          <div className="w-1 h-20 lg:w-40 lg:h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-2 w-64 min-h-64 max-h-64 p-10 bg-emerald-300 text-gray-900 shadow-lg rounded-3xl">
            <h3 className="text-2xl font-bold">Generative AI</h3>
            <p className="text-lg max-w-[40rem] text-center text-gray-500">
              The AI model will generate a roadmap based on the prompt you provided.
            </p>
          </div>
          <div className="w-1 h-20 lg:w-40 lg:h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-2 w-64 min-h-64 max-h-64 p-10 bg-emerald-300 text-gray-900 shadow-lg rounded-3xl">
            <h3 className="text-2xl font-bold">Download</h3>
            <p className="text-lg max-w-[40rem] text-center text-gray-500">
              You can download the roadmap Image and use it for your reference.
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}

      <section className="flex flex-col items-center mt-32 gap-20">
        <div>
          <h2 className="text-4xl font-bold">Pricing</h2>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col gap-10 w-72 min-h-96 p-10 bg-slate-200 border-3 shadow-lg rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-700 text-center">Free</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-2 items-center">
                <FaCheck />
                <p className="text-gray-500">Limited Credits</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck />
                <p className="text-gray-500">Community Support</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck />
                <p className="text-gray-500">Standard Roadmaps</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Link href="/roadmap">
                <Button>Get started</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-72 min-h-96 p-10 bg-slate-200 border-3 shadow-lg rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-700 text-center">Pro</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-2 items-center">
                <FaCheck />
                <p className="text-gray-500">Unlimited Credits</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck />
                <p className="text-gray-500">Priority Support</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaCheck />
                <p className="text-gray-500">Advanced Roadmaps</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button disabled>Comming Soon!</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
