import {MdEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import Image from 'next/image'
import logo from '../assets/mnlogotridakta.png'
import Link from 'next/link'

const PgHeader = () => {
    return (
        <header className="flex flex-row lg:mt-5 mt-2 h-15 items-center w-full lg:px-[20%] justify-center">
            <a className='flex flex-row items-center lg:mr-auto' href="/">
                <Image className='transition-all duration-200 ease-linear w-10' alt="Logo" src={logo}/>
                <span className='font-mono text-xl text-white ml-4'>TRIDAKTA</span>
            </a>
            <nav className='gap-4 items-center lg:flex hidden'>
                <a className='nav-button'>Componentes</a>
                <a className='nav-button'>Templates</a>
                <a className='nav-button'>Docs</a>
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