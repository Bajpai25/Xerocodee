

function Page3() {
  return (
   <div className='bg-blue-600 rounded-md m-4'>
    <h1 className='md:text-4xl text-center pt-8 p-6 text-3xl text-white font-semibold font-[Poppins]'>Modernize apps, infrastructure with cloud native tech<br/> 
    for resilience, scalability.</h1>
    <div className='flex flex-col md:flex md:flex-row flex-wrap  mt-12 p-6 gap-20 justify-around '>
        <div className='flex flex-row relative flex-wrap md:p-0 md:m-0 mr-32 gap-0 '>
         <img src="./Image.png" alt="image" className='w-[323.69px] h-[280.51px]  absolute rounded-[14px]  bg-cover '></img>
         <img src="./Image1.png" alt="image1" className='w-[227.13px] h-[120.97px] relative left-[150px]  bottom-[10px]  rounded-[10px]  bg-cover'></img> 
         <img src="./Image2.png" alt="image2" className='w-[337.60px] h-[200.74px] top-[60px] left-[140px] absolute rounded-[14px]  bg-cover '></img>  
        </div>
        <div className='flex flex-col p-4 md:mt-0 mt-8'>
         <h1 className='text-white md:text-[44px] text-2xl font-semibold font-[Poppins] pb-6'>Real-time risk monitoring</h1>
         <p className='text-white md:text-xl text-lg font-normal font-[Nunito Sans] pb-6'>Real-time risk monitoring across your<br/>
         infrastructure and application ecosystem<br/>
         will help you maintain ongoing <br/>
         compliance with more than 05+ different<br/>
         regulatory standards.
         </p>   
        </div>
    </div>
    <div className='flex flex-col md:flex md:flex-row  mt-12 p-6 gap-20 justify-around '>
        <div className='flex flex-col p-4'>
         <h1 className='text-white md:text-[44px] text-2xl font-semibold font-[Poppins] pb-6'>Collaborative workflows</h1>
         <p className='text-white md:text-xl text-lg font-normal pb-6 font-[Nunito Sans]'>Share artefacts easily and collaborate with team <br/>
         members, auditors, and pen testers via automated <br/>
         procedures. To manage daily compliance with <br/>
         automatic notifications and reminders, create, assign.
         </p>   
        </div>
        <div className='flex flex-col gap-4'>
         <img src="./iconography.png" alt="iconography" className='w-[372.68px] h-[269.16px] rounded-2xl'></img>
         <img src="./file.png" alt="file" className='w-[352.84px] h-[202.73px] rounded-[20px]'></img>  
        </div>
    </div>
   </div>
  )
}

export default Page3