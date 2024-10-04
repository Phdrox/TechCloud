import {NodeJS_Dark,Docker,React_Dark,MySQL_Dark,PHP_Dark} from 'react-skillicons';
 export default function Tecnologia() {
   return (
  <div className=" flex flex-col row-span-1 bg-sky-500 mobile:gap-14 p-3 justify-center" id='Tecnologias' >
      <div className='flex mobile:flex-col mobile:items-center text-white' data-aos='fade-down'>
        <p className='order-2 mobile:w-10/12'>A TechCloud utiliza as seguintes tecnologias em seus projetos: Docker, para criação de ambientes isolados e escaláveis; React, no desenvolvimento de interfaces de usuário dinâmicas;
          Node.js, para servidores rápidos no backend; MySQL,como banco de dados relacional; e PHP, para aplicações web dinâmicas e flexíveis. Essas ferramentas garantem a entrega de soluções
          ágeis e de alta performance.</p>
        <h2 className=' font-bold mobile:text-2xl ' >Tecnologias</h2>
      </div>
      <div className='flex justify-center mobile:gap-4' data-aos='zoom-in'>
        <NodeJS_Dark className='mobile:w-10' />
        <Docker className='mobile:w-10' />
        <React_Dark className='mobile:w-10'/>
        <MySQL_Dark className='mobile:w-10'/>
        <PHP_Dark className='mobile:w-10'/>
      </div>
  </div>
   )
 }
 