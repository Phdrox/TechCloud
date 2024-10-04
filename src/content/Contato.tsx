import Form from "../components/Form";
import PixIcon from '@mui/icons-material/Pix';

export default function Contato() {
  return (
    <div  className=" flex flex-col items-center gap-4 row-span-1 p-3 mb-4 text-white tablet:col-span-2 tablet:gap-10 tablet:mt-10 notebook:flex-row" id='Contato'>
     <div className="flex flex-col justify-between gap-4 tablet:flex-row notebook:flex-col notebook:h-full notebook:w-7/12" data-aos='fade-left'>
        <div className=" flex flex-col mobile:items-center mobile:w-full tablet:items-start" >
           <h2 className=" font-bold mobile:text-2xl notebook:text-3xl">Contato </h2>
           <p className="mobile:w-11/12 mobile:text-center tablet:text-left">Entre em contato para fazer seu orçamento com a TechCloud</p>
        </div>

        <div className=" flex flex-col gap-3 mobile:items-center mobile:w-full notebook:items-start">
          <h2>Formas de Pagamento</h2>
          <span className="flex gap-4">
            <img src="./image/Vector.png" alt="" className="mobile:w-10 "/>
            <span className="font-bold"><PixIcon fontSize="large"/>PIX</span>
          </span>
        </div>
     </div>
      
      <Form/>
    </div>
  )
}
