

function Page4() {
  return (
    <>
    <div className='bg-white  h-auto shadow-inner m-6 rounded-lg mt-40 mb-20'>
    <div className='flex flex-row justify-center gap-6 '>
    <h1 className='text-center text-zinc-800 md:text-[44px] text-2xl mt-12 mb-12 font-semibold font-sans'>The Xerocodee way</h1>
    <img src='./Rocket.png' alt="rocket" className='mt-12 mb-12'></img>
    </div>
    <h1 className='mt-16 text-center text-3xl font-medium'>01</h1>
    <div className='flex justify-center'>
    <img src="./Line.png" alt="line"></img>
    </div>
    <h1 className='text-center text-slate-700 text-2xl'>Self serve Infrastructure</h1>
    <div className=" flex justify-center text-slate-600 text-base font-normal font-['Nunito'] p-4 "> 
    Accelerate by self-serving production-ready infrastructure and customize as you scale.</div>
     <div className='flex flex-row gap-4 justify-start mt-12 font-[Nuninto] ml-4 shadow-inner w-[300px] rounded-lg p-2'>
      <p className='border-b-2 border-blue-700 text-center pb-2 text-slate-600 text-xs'>Your Cloud</p>
      <p className='text-center text-slate-600 text-xs'>Infra components</p>
      <p className='text-center text-slate-600 text-xs'>Self-hosted Apps</p>
     </div>
     <div  className='md:flex md:flex-row flex flex-col justify-around gap-12'>
     <div className='md:flex md:flex-row md:gap-8 mt-6'>
     <div>
   <img src="./cloud.png" alt="cloud" className='md:h-[180px] xs:h-[100px] m-auto'></img>
     </div>
     <div>
      <img src="./aws_1.png" alt="aws" className='md:h-[150px] xs:[70px] m-auto mt-8'></img>
     </div>
     </div>
     <div className='flex flex-col gap-4 mt-6 p-6'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>In Your Cloud</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Your infrastructure runs on your AWS or GCP account.
      <br/> 
      Never get locked in. Infinitely scalable.Azure support coming soon.</p>
     </div>
     </div>
     <h1 className='mt-16 text-center text-3xl font-medium'>02</h1>
    <div className='flex justify-center'>
    <img src="./Line.png" alt="line"></img>
    </div>
    <h1 className='text-center text-slate-700 text-2xl mt-8'>Deploy applications, fast!</h1>
    <div className=" flex justify-center text-slate-600  text-base font-normal font-['Nunito'] p-3 "> 
    Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.</div>
    <div  className='md:flex md:flex-row flex flex-col justify-around gap-12 mt-24'>
     <div className='mt-6'>
   <img src="./box.png" alt="box" className='md:h-[150px] xs:h-[100px]  p-2'></img>
     </div>
     <div className='flex flex-col gap-4 mt-6 p-6'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Configurable Build and Deploy pipelines</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Portable builds powered by Dagger and continuous deployments powered 
      <br/>by ArgoCD - you gain more control of your pipelines with composable 
      <br/>custom, build, and deploy stages. 
      </p>
     </div>
     </div>
     <div  className='md:flex md:flex-row flex flex-col justify-around gap-12 mt-24'>
     <div className='flex flex-col gap-4 mt-6 p-6'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Push to Deploy</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Just connect your repo with one click and push. Argonaut’s deep integration
      <br/>with GitHub Actions and GitLab pipelines build and deploy your code on 
      <br/>every push.
      </p>
     </div>
     <div className='mt-6'>
   <img src="./git.png" alt="git" className='xs:h-[140px]  p-3 '></img>
     </div>
     </div>
     <div  className='md:flex md:flex-row flex flex-col justify-around gap-12 mt-24'>
     <div className='md:mt-20 flex gap-4 md:p-0 p-6'>
   <div className='w-20  h-20 bg-gradient-to-b from-blue-200 to-white rounded-[10px] mt-[30px] border border-blue-200 border-opacity-25'>
    <img src="./tools-delivery-azure.png" alt="delivery" className='w-[50px] h-[50px] m-auto mt-2'></img>
   </div>
   <div className='w-[100px] h-[100px] bg-gradient-to-b from-blue-200 to-white rounded-[10px] mt-[-50px] border border-blue-200 border-opacity-25'>
    <img src="./tools-observability-grafana.png" alt="grafana" className='w-[80px] h-[80px] m-auto mt-2'></img>
   </div>
   <div className='w-20 h-20 bg-gradient-to-b from-blue-200 to-white rounded-[10px]  mt-[-70px] border border-blue-200 border-opacity-25'>
    <img src="./gitlab.png" alt="gitlab" className='m-auto mt-2'></img>
   </div>
   <div className='w-[60px] h-[60px] bg-gradient-to-b from-blue-200 to-white rounded-[10px] mt-[30px]  border border-blue-200 border-opacity-25'>
    <img src="./Redis.png" alt="redis" className='w-[32.49px] h-[32.49px]  m-auto mt-2'></img>
   </div>
     </div>
     <div className='flex flex-col gap-4 mt-6 p-6'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Multiple runtimes</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Quickly deploy apps to containerized or serverless runtimes on your cloud 
      <br/>and customize architectures to cost and performance constraints. Deploy on 
      <br/>Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud 
      <br/>Functions.
      </p>
     </div>
     </div>
     <div  className='md:flex md:flex-row flex flex-col justify-around gap-20 mt-24'>
     <div className='flex flex-col gap-4 mt-6 p-6'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Push to Deploy</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Just connect your repo with one click and push. Argonaut’s deep integration
      <br/>with GitHub Actions and GitLab pipelines build and deploy your code on 
      <br/>every push.
      </p>
     </div>
     <div className='md:flex md:flex-row flex flex-col gap-6 flex-wrap'>
   <img src="./image 34.png" alt="image 34" className='xs:w-[300px] xs:h-[100px] m-auto'></img>
   <img src="./many_boxes.png" alt="many_boxes" className='xs:w-[300px] xs:h-[100px] m-auto' ></img>
     </div>
     </div>
     <h1 className='mt-16 text-center text-3xl font-medium'>03</h1>
    <div className='flex justify-center'>
    <img src="./Line.png" alt="line"></img>
    </div>
    <h1 className='text-center text-slate-700 text-2xl mt-8'>Visibility into costs and metrics</h1>
    <div className=" flex justify-center text-slate-600  text-base font-normal font-['Nunito'] p-3 "> 
    Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.
    </div>
    <div  className='md:flex md:flex-row flex flex-col justify-around gap-20 mt-24'>
     <div className='flex flex-col'>
     <h1 className='md:pl-[90px] font-bold text-blue-600 text-sm font-[Nunito] pl-[210px]'>-23%</h1>
   <img src="./image 35.png" alt="image 35" className='xs:h-[150px] xs:w-[300px] md:pl-0 md:pr-0 pl-[90px] pr-[90px]' ></img>
   <div className='flex flex-row gap-3 mt-2'>
    <img src="./aws.png" alt="aws" className='md:ml-0 ml-[100px]'></img>
    <h1 className='text-slate-700 text-sm font-[Poppins] font-semibold'>Total - $1272</h1>
   </div>
     </div>
     <div className='flex flex-col gap-4 mt-6 p-6'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Customizable cost dashboards and reports</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Stay on top of your cloud spending with custom cost dashboards and 
      <br/>reports — sort, filter, and group by your various accounts, resources, and 
      <br/>cloud regions.
      </p>
     </div>
     </div>
     <div  className='md:flex md:flex-row flex flex-col justify-around gap-12  mt-24'>
     <div className='flex flex-col gap-4 mt-6 p-6 pr-12'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Preview infra costs</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>See the cost of a specific resource while choosing it (before provisioning). It 
      <br/>saves you the hassle of searching through the complex pricing pages of your 
      <br/>cloud provider or tools.
      </p>
     </div>
     <div className='mt-6 m-2'>
   <img src="./triangle.png" alt="triangle" className='m-auto'></img>
     </div>
     </div>
     <div  className='md:flex md:flex-row flex flex-col justify-around gap-12 mt-24'>
     <div className='md:flex md:flex-row flex flex-col gap-2 m-6 flex-wrap'>
   <img src="./image 37.png" alt="image 37" className='xs:h-[50px] xs:w-[50px]'></img>
   <img src="./Network Share.png" alt="share" className='h-[100px] w-[100px] mt-8 m-auto'></img>
   <img src="./Pie Chart.png" alt="pie" className='h-[100px] w-[100px] mt-8 m-auto'></img>
   </div>
     <div className='flex flex-col gap-4 mt-6 p-4'>
      <h1 className='text-slate-700 font-[poppins] font-semibold text-lg'>Observability from day one</h1>
      <p className='font-[Nuninto] font-normal text-base text-slate-600'>Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and 
      <br/>observability tools of your choice, such as Grafana/Loki, DataDog, 
      <br/>Prometheus, and more. Stay on top of your application metrics from day 1.
      </p>
     </div>
     </div>
     </div>
     </>
  )
}

export default Page4