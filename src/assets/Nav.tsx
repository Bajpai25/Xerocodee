
import { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
function Nav() {
  const [click,setclick]=useState(false);
  const handleclick=()=>{
    setclick(!click);
  }
  return (
    <div className=" md:flex md:flex-row flex flex-col   w-full h-auto px-[117.20px] pt-[21px] pb-5 bg-white rounded-[10px] 
    shadow border border-neutral-200 border-opacity-50 justify-evenly items-center gap-[33px] ">
    <div>
     <img src="./logo 4 1.png"></img>   
    </div>
    <AiOutlineMenu className='md:hidden block text-black'  onClick={handleclick} />
    {click ? (<div className=' md:flex  md:flex-row flex flex-col gap-8'>
    <p>Home</p>
    <p>Team</p>
    <p>Contact</p>
    <p>Careers</p>   
    </div>): (null)}
    <div className=' md:flex  md:flex-row hidden gap-8'>
    <p>Home</p>
    <p>Team</p>
    <p>Contact</p>
    <p>Careers</p>   
    </div>
    <div className=' md:flex md:flex-row flex flex-col'>
        <button className='w-[113.30px] h-[39.23px] text-center text-blue-700 rounded-[5px] border-2 border-blue-700'>Sign In</button>
    </div>
    
</div>
  )
}

export default Nav