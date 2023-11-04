

function Review() {
  return (
    <div className='mt-20'>
        <div className="w-full text-center text-slate-700 md:text-[44px] text-4xl  font-semibold font-[Poppins] capitalize
         leading-[61.60px]">See our success stories</div>
         <div className='w-full h-auto '>
            <div className='w-auto h-auto mt-10   shadow-inner rounded-lg  bg-white bg-opacity-20   
             flex flex-row flex-wrap justify-center md:m-auto m-6 gap-6'>
            <div className='bg-blue-700 w-[32px]  rounded-full h-[30px]   mt-20 relative'>
                <img src="./left.png"></img>
            </div>
            <div className='w-[200px] lg:block  hidden h-auto relative  rounded-tl-[50px] rounded-bl-[50px] bg-blue-700'>
             <img src="./commas.png" className='absolute w-16 h-16 top-[60px] left-[50px]'></img>  
            </div>
            <div className='w-auto h-auto p-6 text-lg font-normal font-[Nunito]'>
            There are many variations of passages of Lorem Ipsum available<br/> 
            but the majority has suffered alteration in some form, by injected humour,or<br/>
            randomised words which don't look even slightly believable.<br/>
             If you are going to use a passage
</div>
 <div className="flex-col justify-end items-center inline-flex ml-4 mt-12">
    <div className="w-auto text-right"><span className="text-zinc-800 text-lg font-normal font-[Nunito] ">-</span>
    <span className="text-zinc-800 text-md font-semibold font-[Nunito] ">Abcdefgh Ijklmnop<br/></span>
    <span className="text-zinc-800 text-md font-normal font-[Nunito] ">Frontend Engineer</span></div>
</div>
<div>
</div>
    <div className="w-24 h-24 mt-12 rounded-full border-4 mr-3 border-blue-700 " />
    <div className='bg-blue-700 rounded-full w-[32px] h-[32px] mt-20 relative'>
    <img src="./right.png"></img>
</div>
</div>
         </div>
         <img src="./dots.png" className='m-auto'></img>
    </div>
  )
}

export default Review