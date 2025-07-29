import {FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import logo from '../assets/logotridakta.png'

//Not functional use ()
//For estilize use className and 'change items and positions', use flex for definition of position, justify=h
//items=vertical and functional use []. Text for change textos,margin for comprimir text
//a for redirect and buttons for functional
const Maincontent = () => (
    <div className='ml-[30%] mr-[30%] flex items-center mt-[7%] flex-col h-150'>
        <Image src={logo} className='h-[40%] w-auto drop-shadow-md drop-shadow-primary hover:scale-102 transition-all duration-100 ease-linear animate-pulse' alt="Logo"/>
        <h1 className='text-6xl font-bold text-[#cccccf] text-center cursor-default'>The future of 3D printing stock & expense control</h1>
        <p className='text-offgray font-bold text-center mt-9 ml-[15%] mr-[15%] text-lg'>Clean, efficient tools for organizing your 3D printing workflow, from filament inventory to financials.</p>
        <div className='flex flex-row mt-8 gap-5 h-[7%]'>
            <a className='text-black bg-white p-2 font-bold rounded-lg pr-3 pl-3 flex flex-row items-center cursor-pointer hover:bg-white/90 transition-all duration-200 ease-linear'>Launch Dashboard<FaArrowRight className='ml-2' size="12"/></a>
            <div className='flex flex-row justify-center border-1 border-[#545656] rounded-lg items-center p-2 pr-3 pl-3 font-mono backdrop-blur-md bg-black/10 cursor-pointer hover:border-[#a1a1a1] transition-all duration-200 ease-linear w-35'>
                <span className=''>Sign Up</span>
                <button></button>
            </div>
        </div>
    </div>
)

export default Maincontent