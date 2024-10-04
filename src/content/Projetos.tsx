import Card from "../components/Card";


export default function Projetos() {
  return (
    <div className="row-span-2 p-7 flex flex-col gap-4 justify-center tablet:col-span-2 tablet:gap-10 tablet:row-span-1" id='Projetos'>
      <div className="flex mobile:flex-col mobile:items-center text-white notebook:items-start notebook:gap-4 notebook:flex-row notebook:justify-between">
        <h1 className="mobile:text-2xl font-bold tablet:text-3xl" data-aos='fade-left'>Projetos</h1>
        <p className="mobile:text-xs mobile:text-center tablet:text-sm tablet:w-7/12 notebook:text-right notebook:w-/12" data-aos='fade-right' >A TechCloud já realizou diversos projetos de destaque no desenvolvimento de sistemas web e sites personalizados. </p>
      </div>
      <div className="flex w-1/2 mobile:flex-col mobile:gap-7 tablet:w-full notebook:flex-row notebook:w-full mobile:w-full">
          <div className="text-white flex flex-col mobile:items-center mobile:w-full tablet:w-full notebook:items-start notebook:w-1/2" data-aos='fade-left'>
            <h2 className="font-semibold mobile:text-xl notebook:text-2xl ">2 PROJETOS</h2>
            <p className=' mobile:text-xs mobile:w-full mobile:text-center notebook:text-left notebook:text-sm' >Projetos feitos, para facilitar e auxiliar nos desafios diários </p>
          </div>
          
          <div className=" flex mobile:w-full mobile:flex-wrap mobile:justify-center mobile:gap-4 notebook:w-full notebook:gap-5">
            <Card image="./image/short.png" descricao="O UpEnterprise, desenvolvido pela TechCloud, é um sistema voltado para o gerenciamento de produtos, 
            permitindo que empresas organizem estoques, controlem fornecedores e acompanhem vendas em uma plataforma integrada e eficiente." />
            
            <Card image="./image/up.png" descricao="A TechCloud desenvolveu o ShortText voltado para armazenar resumos, oferecendo uma plataforma simples e organizada para usuários salvarem, 
            categorizarem e acessarem rapidamente resumos de textos, livros ou artigos."/>
          </div>
      </div>
    </div>
  )
}
