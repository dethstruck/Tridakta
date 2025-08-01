import {MdEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import Image from 'next/image'
import logo from '../assets/mnlogotridakta.png'
import Link from 'next/link'

const PgHeader = () => {
    return (
        <header className="flex flex-row lg:mt-5 mt-2 h-15 items-center w-full lg:px-[20%] justify-center">
            <Link className='flex flex-row items-center lg:mr-auto' href="/">
                <Image className='transition-all duration-200 ease-linear w-10' alt="Logo" src={logo}/>
                <span className='font-mono text-xl text-white ml-4'>TRIDAKTA</span>
            </Link>
            <nav className='gap-4 items-center lg:flex hidden'>
                <Link href='/' className='nav-button'>Components</Link>
                <Link href='/' className='nav-button'>Templates</Link>
                <Link href='/about' className='nav-button'>About Us</Link>
                <span className='w-[1px] border-offgray h-6 border-[1px] opacity-40'/>
                <div className='flex flex-row gap-5'>
                    <Link href="https://github.com/dethstruck/Tridakta" target="_blank">
                        <FaGithub className='nav-button' size="45"/>
                    </Link>
                    <MdEmail className='nav-button' size="45"/>
                </div>
            </nav>
        </header>
    )
}


export default PgHeader