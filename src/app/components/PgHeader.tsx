import {MdEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import Image from 'next/image'
import logo from '../assets/mnlogotridakta.png'

const PgHeader = () => {
    return (
        <header className="flex flex-row ml-[16%] mr-[16%] mt-5 h-15 p-1 items-center top-0">
            <a className='flex flex-row items-center mr-auto' href="/">
                <Image className='transition-all duration-200 ease-linear w-10' alt="Logo" src={logo}/>
                <span className='font-mono text-xl text-white ml-4'>TRIDAKTA</span>
            </a>
            <nav className='flex gap-4 items-center'>
                <a className='nav-button'>Componentes</a>
                <a className='nav-button'>Templates</a>
                <a className='nav-button'>Docs</a>
                <span className='w-[1px] border-offgray h-6 border-[1px] opacity-40'/>
                <a className='flex flex-row gap-5'>
                    <FaGithub className='nav-button' size="45"/>
                    <MdEmail className='nav-button' size="45"/>
                </a>
            </nav>
        </header>
    )
}


export default PgHeader