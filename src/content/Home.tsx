import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Projetos from './Projetos';
import Tecnologia from './Tecnologia';
import Sobre from './Sobre';
import Contato from './Contato';

export default function Home() {
  useEffect(()=>{AOS.init({duration:1000});},[])
  
  
  return (
    <div className='grid grid-rows-6 mobile:grid-cols-1 min-h-screen tablet:grid-cols-2 tablet:grid-rows-4' id='Home'>
     <Navbar/>
     <div className='row-span-1 bg-[url("./image/Wallpaper.png")] mobile:gap-4 bg-no-repeat bg-cover flex items-center justify-center mobile:flex-col tablet:col-span-2 notebook:flex-row bg-fixed'>
        <div className=' flex w-full mobile:order-2 mobile:gap-4 mobile:flex-col mobile:items-center notebook:order-1 notebook:items-start notebook:p-3 notebook:justify-between' data-aos='fade-left'>
          <h1 className='text-white tablet:text-2xl flex gap-1 flex-col tablet:items-center notebook:gap-0 notebook:items-start'><span className='font-bold text-xl tablet:text-3xl notebook:text-5xl'>Faça um upgrade</span> no seu negócio </h1>
          <p className='flex text-white text-xs  mobile:w-10/12 mobile:text-center notebook:w-10/12 notebook:text-left' >A TechCloud tem o prazer de apresentar sua expertise no desenvolvimento de sites e sistemas web, oferecemos soluções que atendem às necessidades exclusivas de cada cliente.</p>
        </div>
        <img src="./image/Cloud.png" alt="" className='flex mobile:w-1/2 notebook:order-1 notebook:w-1/3' data-aos="zoom-in"/>
     </div>
     <Projetos/>
     <Tecnologia/>
     <Sobre/>
     <Contato/>
     <p className='text-white w-full text-center notebook:col-span-2 tablet:col-span-2 mobile:col-span-1 mb-10'>&copy; 2024 Copyright TechCloud</p>


  
    </div>
  )
}
