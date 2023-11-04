

function Newsletter() {
  return (
    <div className='bg-[#90BFFF] rounded-xl md:m-12 m-6 relative h-[600px]'>
     <div className=' md:m-12 m-6  items-center flex flex-col'>
     <img src="./plane.png"></img>
     <div className="md:w-[600px] w-auto  text-center text-zinc-800 md:text-[44px] text-3xl font-semibold 
     font-[Poppins] capitalize ">Subscribe to Our Newsletter & get the Coupon code.</div>
     </div>
     <div className="opacity-80 text-zinc-800 text-center items-center ' 
     text-xl font-normal font-[Nunito Sans] ">All your information is completely confidential</div>   
    <div className='md:flex md:flex-row flex flex-col flex-wrap justify-center mt-12 gap-6'>
        <input type="email" className='md:w-[491px] md:h-[60px] w-[300px] h-[50px] md:m-0 m-auto rounded-lg text-lg p-4' placeholder='Type your email' ></input>
        <button className='bg-blue-700 text-white font-sans p-1 w-[200px] h-[60px] mt-6 md:m-0 m-auto rounded-lg text-xl'>Submit</button>
    </div>
    </div>
  )
}

export default Newsletter