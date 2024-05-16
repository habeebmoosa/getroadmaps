import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center mt-16 w-full bg-gray-900 pt-10">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-72">
                <Link className="flex flex-row items-center gap-1 p-4" href={"/"}>
                    <Image
                        src={"/icon.svg"}
                        alt="Get RoadMaps"
                        width={40}
                        height={40}
                    />
                    <h1 className="bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text text-2xl tracking-tight text-transparent font-bold">Get RoadMaps</h1>
                </Link>
            </div>
            <div className="w-64 h-[0.07rem] bg-gray-500"></div>
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-gray-200">&copy; 2024 <Link href={"/"} className="hover:text-gray-400 hover:underline">Get RoadMaps.</Link> All rights reserved.</p>
                <p className="text-gray-200">Designed and developed by</p>
                <p><a href={"https://habeebmoosa.vercel.app"} target={"_blank"} className="bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text tracking-tight text-transparent"> Habeeb Moosa</a></p>
            </div>
        </footer>
    )
}