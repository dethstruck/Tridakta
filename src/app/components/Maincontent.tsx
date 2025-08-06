"use client"

import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../assets/logotridakta.png';
import Link from 'next/link';

const Maincontent = () => (
  <div className="px-4 mt-24 lg:mt-[1%] 2xl:mt-[1%] flex flex-col items-center text-center max-w-screen-xl mx-auto flex-grow">
    <Image src={logo} alt="Logo" className="w-2/3 sm:w-1/3 lg:w-1/4 h-auto drop-shadow-md hover:scale-105 transition-transform duration-200 ease-in-out animate-pulse"/>
    <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#cccccf] mt-6">
      The future of 3D printing stock & expense control
    </h1>
    <p className="text-offgray font-medium sm:font-bold mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-xl">
      Clean, efficient tools for organizing your 3D printing workflow, from filament inventory to financials.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Link href="/dashboard" className="bg-white text-black font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-white/90 transition-all duration-200 cursor-pointer">
      Launch Dashboard
      <FaArrowRight className="ml-2" size={12}/>
      </Link>
      <Link href="/login" className="border border-[#545656] font-mono backdrop-blur-md bg-black/10 hover:border-[#a1a1a1] text-white py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200">
        Sign Up
      </Link>
    </div>
  </div>
);

export default Maincontent;
