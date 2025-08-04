import {MdEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import Image from 'next/image'
import logo from '../assets/mnlogotridakta.png'
import Link from 'next/link'

type PgHeaderProps = {
    title?: string;
}

const PgHeader = ({title = 'Dashboard'}: PgHeaderProps) => {
    return (
        <header className="flex flex-row h-full items-center w-full justify-center bg-back2 border-b-1 border-line">
            <h1 className='font-bold text-3xl text-white mx-[1%] cursor-default w-[15%] text-center'>{title}</h1>
            <div className='w-[1px] h-[70%] bg-line'></div>
            <Link className='flex flex-row items-center ml-[1%] lg:mr-auto' href="/">
                <Image className='transition-all duration-200 ease-linear w-10 drop-shadow-sm drop-shadow-white animate-pulse' alt="Logo" src={logo}/>
                <span className='font-mono text-3xl text-white ml-4 drop-shadow-sm drop-shadow-white animate-pulse'>TRIDAKTA LABS</span>
            </Link>
            <nav className='gap-4 items-center lg:flex hidden mx-[1%]'>
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