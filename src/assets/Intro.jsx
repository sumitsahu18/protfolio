
function Intro(){
     return (
        <div  className=" w-full mx-auto container mt-23 flex flex-col gap-6 justify-center items-center lg:flex-row lg:  md:flex-row md:gap-6">
             
    <div className=" justify-center gap-6 flex lg:flex-col lg:order-1 lg:mr-10 md:flex-col md:order-1 ">        
        <div className="bg-amber-50 cursor-pointer w-10 h-10 rounded-2xl flex justify-center items-center">
          <a href="https://github.com/" target="_blank"><img className="w-6 " src="/images/git.png" alt="" /></a>
        </div>
        <div  className="bg-amber-50 w-10 h-10 rounded-2xl flex justify-center items-center">
          <img className="w-6" src="/images/ins.png" alt="" />
        </div>
        <div  className="bg-amber-50 w-10 h-10 rounded-2xl flex justify-center items-center">
          <a href="https://web.whatsapp.com/" target="_blank"><img className="w-6" src="/images/what.png" alt="" /></a>
        </div>
        <div  className="bg-amber-50 w-10 h-10 rounded-2xl flex justify-center items-center">
         <a href="https://www.linkedin.com/feed/" target="_blank"> <img className="w-6" src="/images/lin.png" alt=""/></a>
        </div>
      </div>

      <div className="blob w-[250px] h-[250px] lg:w-[400px]  lg:ml-22  lg:h-[400px] md:w-[320px] md:h-[320px] md:order-3">
          <img src="/images/sumit5.jpeg" alt="" />
      </div>
    
      <div className="flex flex-col justify-center items-start w-[320px] gap-2 lg:ml-12 lg:mr lg:flex lg:w-[480px] lg:order-2 md:flex md:w-[350px] md:order-2">
        <h1 className=" text-6xl font-['Audiowide'] font-normal not-italic mb-6">Sumit sahu</h1>
        <h1 className="text-2xl lg:4xl mb-8 font-medium">----CSE Student</h1>
        <p className="font-medium opacity-80 mb-2 ">
          I am a passionate computer science engineering student with a strong
          interest in web development and software engineering. Currently
          exploring the realms of technology and building exciting projects to
          expand my skills.
        </p>
        <div className="flex bg-[#303030] text-teal-50 p-4 px-10 font-medium gap-1 rounded-4xl">
          <a href="#Contact"><button >Say Hello </button></a>
          <img className="w-6" src="/images/tele5.webp" alt="" />
        </div>
      <div className='flex items-center'>
        <div className='h-10 w-5   mr-2 rounded-full border-2 flex justify-center items-center'>
            <div className='w-1 h-2 rounded-[2px] bg-black animate-[updown_2s_ease-in-out_infinite] '></div>
        </div>
          <p className='text-2xl' >Scroll Down</p>
      </div>  
      </div>

    </div>
     )
}
export default Intro