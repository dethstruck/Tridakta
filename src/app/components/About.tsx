import React from 'react';
import {FaGithub,FaGithubAlt, FaLinkedin} from 'react-icons/fa'

const About = () => {
    return(
        <div className='h-full w-full text-gray-300 font-mono flex py-[1%] mb-auto'>
            <section className='w-full flex flex-col items-center'>
                <h1 className='text-4xl md:text-5xl font-bold text-zinc-950 mb-0 [text-shadow:0_0_8px_#8B0000]'>{'//About us'}</h1>
                <div className='mt-6'></div> 
                <p className='text-4lg leading-relaxed border-l-4 border-purple-500 pl-4'>A Tridakta é um projeto criado para revolucionar a forma como você lida com filamentos de impressoras 3D.
                <br/> Faça um teste,escolha um filamento e veja a mágica acontecer!
                <br/>Este é um projeto desenvolvido por dois apaixonados por tecnologia — um casal que uniu criatividade e conhecimento para resolver um problema real no mundo da impressão 3D. Criado com React (TSX), Tailwind CSS e Node.js,
                 o sistema tem como foco principal facilitar o gerenciamento de filamentos, evitando desperdícios e otimizando o uso do estoque.
                A ideia surgiu da necessidade de tornar o processo mais prático, visual e eficiente, especialmente para quem trabalha com impressão 3D de forma recorrente. 
                <br/>Com a Tridakta, é possível simular usos, controlar materiais e acompanhar tudo de forma clara e intuitiva.
                Nosso propósito é entregar uma ferramenta leve, inteligente e funcional — feita com carinho e código, para makers, criadores e entusiastas da tecnologia.
                </p>
                <div className='mt-8'></div> 
                <h2 className='text-3xl text-justify sm:text-4xl font-bold text-red-600 mb-12 [text-shadow:0_0_8px_#2F4F4F]'>{'//Developers'}</h2>
            <div className="flex flex-row items-center gap-10">
              <div className="bg-gray-900/50 border border-rose-950/50 rounded-lg p-6 text-center group transition-all duration-300 ease-in-out hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-2">
                <div className="mb-4">
                  <FaGithub/>
                   <div className="w-32 h-32 flex flex-row justify-center rounded-full mx-auto border-2 border-red-600 object-cover transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.7)]"></div>
                  <h3 className='text-2xl font-semibold text-white mb-1'>Gustavo Hirota</h3>
                  <p className='text-red-900 mb-4'>FullStack Developer</p>
                  <div className='flex flex-row w-full gap-[25%] justify-center'>
                    <FaGithubAlt className='w-8 h-8' href='https://github.com/dethstruck' />
                    <FaLinkedin className='w-8 h-8' href='https://www.linkedin.com/in/gustavohirota'/> 
                  </div>
                  </div>
            </div>
            <div className="bg-gray-900/50 border border-rose-950/50 rounded-lg p-6 text-center group transition-all duration-300 ease-in-out hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-2">
            <div className="mb-4">
            <FaGithub/>
            <div className="w-32 h-32 flex flex-row justify-center rounded-full mx-auto border-2 border-red-600 object-cover transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.7)]"></div>
            <h3 className='text-2xl font-semibold text-white mb-1'>Geovanna Versati</h3>
            <p className='text-red-900 mb-4'>FrontEnd Developer</p>
            <div className='flex flex-row w-full gap-[25%] justify-center'>
            <FaGithubAlt className='w-8 h-8' href='https://github.com/GiVersati' />
            <FaLinkedin className='w-8 h-8' href='www.linkedin.com/in/geovannaversati'/> 
      </div>
     </div>
            </div>
            </div>
            </section>
          
       </div> 
        
        
    )
}

export default About