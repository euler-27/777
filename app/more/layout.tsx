import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Euler's website",
 description: "This is my portfolio",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en">
 <body
className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
 >
<StarsCanvas />
<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
<div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
 <a
 href=" "
 className="h-auto w-auto flex flex-row items-center"
 >
 <Image
 src="/images/euler.png"
 alt="logo"
width={70}
 height={70}
 className="cursor-pointer hover:animate-slowspin"
 />

 <span className="font-bold ml-[10px] hidden md:block text-gray-300">
 Euler's Website
 </span>
 </a >

 <div className="flex flex-row gap-5"></div>
 </div>
 </div>
 <div className="fixed z-[-1] flex flex-col h-[100vh] w-full" id="home">
 <video
 autoPlay
 muted
 loop
 className="rotate-180 fixed top-[-340px]  h-full w-full left-0 z-[0] object-cover "
>
 <source src="/blackhole.webm" type="video/webm" />
 </video>
 </div>
 {children}
 </body>
</html>
 );
}
