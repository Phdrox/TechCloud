import { FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

export default function Form() {
   const form:any=useRef();
   const[sucesso,setSucesso]=useState(false);
   const [nome,setNome]=useState('');
   const [email,setEmail]=useState('');
   const[mensagem,setMensagem]=useState('');

   
   const enviarEmail=(e:FormEvent)=>{
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      {publicKey:import.meta.env.VITE_PUBLIC_KEY,}).then(()=>setSucesso(true))
      setNome('')
      setEmail('');
      setMensagem('');
    
   }

  return (
   <form ref={form} className="p-2 flex flex-col items-center bg-sky-500 rounded mobile:w-10/12 mobile:gap-4 tablet:w-7/12 notebook:w-5/12" onSubmit={enviarEmail} data-aos='fade-right' >
    <h1 className="w-full flex justify-center font-bold ">Faça seu Orçamento</h1>
    <div className=" rounded  flex flex-col w-full">
      <label className="font-semibold">Nome</label>
      <input type="text" className="rounded p-2 text-black" name="user_name" value={nome} onChange={(e)=>{setNome(e.target.value)}} />
    </div>
    <div className=" rounded  flex flex-col w-full">
      <label className="font-semibold">Email</label>
      <input type="text" className="rounded p-2 text-black"  name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    <div className=" rounded  flex flex-col w-full">
      <label className="font-semibold">Mensagem</label>
      <textarea name='message' className="rounded p-2 text-black" rows={5}  value={mensagem} onChange={(e)=>{setMensagem(e.target.value)}}></textarea>
    </div>
    <button className="mobile:w-1/2 rounded p-2 bg-white text-sky-700 hover:text-white hover:bg-sky-800 duration-200" >Enviar</button>
     {sucesso?<p className="bg-green-500 text-white p-1">Mensagem enviada com sucesso</p>:''}
   </form>
  )
}
