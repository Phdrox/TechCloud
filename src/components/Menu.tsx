import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import CloseIcon from '@mui/icons-material/Close';
import { setState } from "../redux/reducer";

export const MenuRow=()=>(
    <ul className="flex text-white gap-4 mobile:hidden tablet:hidden notebook:flex">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Projetos">Projetos</a></li>
        <li><a href="#Tecnologias">Tecnologias</a></li>
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#Contato">Contato</a></li>
    </ul>
)

export const MenuCol=()=>{
    const state=useSelector((state:RootState)=>state.techcloud.stateMenu);
    const dispatch=useDispatch();
    
    const closeMenu=()=>{
        dispatch(setState(false));
    }
    
    if(!state){return null};
    return(
    <ul className="flex flex-col text-white gap-4 notebook:hidden absolute items-center bg-sky-950 w-full max-h-max top-0 p-3" data-aos='fade-down'>
        <span className="w-full flex justify-end"><button onClick={closeMenu}><CloseIcon fontSize="large" className="hover:tex-red-500 active:text-red-500 cursor-pointer"/></button></span>
        <li><a href="#Home" onClick={closeMenu}>Home</a></li>
        <li><a href="#Projetos" onClick={closeMenu}>Projetos</a></li>
        <li><a href="#Tecnologias" onClick={closeMenu}>Tecnologias</a></li>
        <li><a href="#Sobre" onClick={closeMenu}>Sobre</a></li>
        <li><a href="#Contato" onClick={closeMenu}>Contato</a></li>
    </ul>
    )
}
    

    
