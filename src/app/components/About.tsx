import React from 'react';
import {FaGithub,FaGithubAlt, FaLinkedin} from 'react-icons/fa'
// <img src={} alt={`Foto de ${name}`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"/>
//
const About = () => {
    return(
        <div className='h-full w-full text-gray-300 font-mono flex py-[1%] mb-auto'>
            <section className='w-full flex flex-col items-center'>
                <h1 className='text-4xl md:text-5xl font-bold text-purple-400 mb-0 [text-shadow:0_0_8px_#06b6d4]'>//About us</h1>
                <p className='text-lg leading-relaxed border-l-4 border-purple-500 pl-4'>A Tridakta é um projeto feito em React Tsx/Css Tailwind com foco 
                no gerenciamento de impressoras 3D. Faça um teste,
                escolha um filamento e veja a mágica acontecer!
                
    
                </p>
                <div className='mt-8'></div> 
                <h2 className='text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 [text-shadow:0_0_8px_#06b6d4]'>//Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-900/50 border border-cyan-700/50 rounded-lg p-6 text-center group transition-all duration-300 ease-in-out hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-2">
                <div className="mb-4">
                  <FaGithub/>
                   <div className="w-32 h-32 flex flex-row justify-center rounded-full mx-auto border-2 border-cyan-600 object-cover transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.7)]"></div>
                  <h3 className='text-2xl font-semibold text-white mb-1'>Gustavo Hirota</h3>
                  <p className='text-cyan-400 mb-4'>FullStack Developer</p>
                  <div className='flex flex-row w-full gap-[25%] justify-center'>
                    <FaGithubAlt className='w-8 h-8' href='https://github.com/dethstruck' />
                    <FaLinkedin className='w-8 h-8' href='https://www.linkedin.com/in/gustavohirota'/> 
                  </div>


                  </div>
            </div>
            </div>
            </section>
          
       </div> 
    
        
    )
}

export default About