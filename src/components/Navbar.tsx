import { useState } from "react"
import { MenuCol, MenuRow } from "./Menu";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { setState } from "../redux/reducer";

export default function Navbar() {
 const[bgNavbar,setNavbar]=useState(false);
 const dispatch=useDispatch();
 
 const openMenu=(e:React.MouseEvent<HTMLElement>)=>{
  e.preventDefault();
  dispatch(setState(true));
 }
 
 const changeBackground=()=>{
    if(window.scrollY>=80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground)

  return (
    <div className={`fixed w-full mobile:w-full h-12 z-20 p-3 flex items-center mobile:justify-center  ${bgNavbar?'bg-sky-700 bg-opacity-40':''}`}>
      <span className="w-full"><img src="./image/Logo.png" alt="" className="mobile:w-5/12 tablet:w-4/12" /></span>
      <span className="w-1/4"><button className="flex justify-center items-center text-white notebook:hidden cursor-pointer" onClick={openMenu}><MenuIcon fontSize="large" /></button></span>
      <MenuRow/>
      <MenuCol/>
    </div>
  )
}
