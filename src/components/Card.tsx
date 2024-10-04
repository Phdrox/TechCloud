interface ICard{
    image:string,
    descricao:string
}
export default function Card({image,descricao}:ICard) {
  return (
    <div className="mobile:w-9/12 p-3 rounded bg-white  tablet:w-5/12 notebook:w-5/12" data-aos="flip-left">
      <img src={image} alt="imageCard" />
      <p className="mobile:text-xs">{descricao}</p>
       
    </div>
  )
}
