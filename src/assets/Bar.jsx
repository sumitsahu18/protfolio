function Bar(){
      return(
        <div className="bg-[#ffffff] fixed p-3 mt-7 rounded-4xl max-w-max" >
         
         <div className="flex gap-4  sm:gap-8 md:gap-9 lg:gap-12 ">
            <div className="w-6 rounded-md flex justify-center hover:shadow-[0_0_8px_black] transition duration-300 hover:bg-blue-600 ">
              <a href="#Intro">   <img className="w-6" src = "/images/p1.png" alt="" /> </a>
            </div>
            <div className="w-6 rounded-md flex justify-center hover:shadow-[0_0_8px_black] transition duration-300 hover:bg-blue-600 ">
             <a href="#About">  <img className="w-6 " src = "/images/p2.png" alt="" /> </a>
            </div><div className="w-6 rounded-md flex justify-center hover:shadow-[0_0_8px_black] transition duration-300 hover:bg-blue-600 ">
              <a href="#Skill">   <img className="w-6 " src = "/images/p3.png" alt="" /> </a>
            </div><div className="w-6 rounded-md flex justify-center hover:shadow-[0_0_8px_black] transition duration-300 hover:bg-blue-600 ">
               <a href="#Certi"><img className="w-6 " src = "/images/p5.png" alt="" /> </a>
            </div><div className="w-6 rounded-md flex justify-center hover:shadow-[0_0_8px_black] transition duration-300 hover:bg-blue-600 ">
              <a href="#Prot"> <img className="w-6 " src = "/images/p4.png" alt="" /> </a>
          
          
            </div><div className="w-6 rounded-md flex justify-center hover:shadow-[0_0_8px_black] transition duration-300 hover:bg-blue-600 ">
               <a href="#Contact"><img className="w-6 " src = "/images/p8.png" alt="" /> </a>
            </div>   
               
         </div>
       </div>
     )
}
export default Bar