

function Footer() {
  return (
    <div className='mt-60 mb-20 bg-blue-200 bg-opacity-10 font-[Poppins] backdrop-blur-2xl text-slate-600 text-base font-normal'>
    <div className='md:flex md:flex-row flex flex-col flex-wrap justify-around px-8 py-8'>
    <div className='flex flex-col gap-4'>
     <p className='pt-[70px]'>You get just what you need to run your cloud<br/>
    workloads--no more, no less.<br/> 
    Deploy from our single pane of glass,<br/> 
    manage them with ease and scale<br/> 
    up as fast as your workload grows</p>   
    <div className='flex flex-row gap-4 mt-16'>
    <img src="./Social.png" className='h-[41px]'></img>
    <img src="./mail.png" className='h-[30px] mt-2'></img>   
    </div>
    </div>
    <div className='flex flex-col gap-3 mt-3'>
     <h1 className='text-slate-700 text-2xl font-semibold font-[Poppins]'>Our Links</h1>
     <div className='flex flex-col gap-4 mt-8'>
        <a>Home</a>
        <a>About us</a>
        <a className='text-blue-700'>Intergrations</a>
        <a>Team</a>
        <a>Blog</a>
     </div>   
    </div>
    <div className='flex flex-col gap-3 mt-3'>
     <h1 className='text-slate-700 text-2xl font-semibold font-[Poppins]'>Our Services</h1>
     <div className='flex flex-col gap-4 mt-8'>
        <a>Infrastructure provisioning</a>
        <a>Network infrastructure automation</a>
        <a>Cost optimization</a>
        <a>Cloud migration</a>
        <a>Kubernetes at scale</a>
     </div>   
    </div>
    <div className='flex flex-col gap-3 mt-3'>
     <h1 className='text-slate-700 text-2xl font-semibold font-[Poppins]'>Other Links</h1>
     <div className='flex flex-col gap-4 mt-8'>
        <a>FAQ</a>
        <a>Careers</a>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <a>Support</a>
     </div>   
    </div>
    </div>
    <div className='flex flex-row flex-wrap justify-between px-8 py-8'>
     <div>
       <p className='text-slate-600 text-lg font-normal font-[Nunito Sans]'>Terms & Conditions | Privacy Policy</p> 
     </div>
     <p className='text-slate-600 text-lg font-normal font-[Nunito Sans]'>
     Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved
     </p>   
    </div>
</div>
  )
}

export default Footer