function Certi() {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-[45px] font-semibold mt-10">Certification</p>
        <p className="font-semibold text-[22px] opacity-50">
          My Learning Journey
        </p>
      </div>
      <div className="text-center mx-auto lg:flex lg:flex-col  lg:items-center">
     <div className="text-center lg:flex gap-4">   
      <div className="bg-amber-50 shadow-2xl w-[300px] sm:w-[400px]  md:w-[450px]  rounded-2xl mb-10 pt-4 flex flex-col justify-center   ">
           <img className="w-[30px] mx-auto mb-5" src="/images/certificate-icons.webp" alt="" />
         <div className="bg-white p-2 rounded-2xl">
          <p className="font-bold p-3">C Programming</p>
          <p className="font-medium">In C programming I learn fundamentals including data types, operators, control structures, functions, arrays, and pointers, building a strong foundation in procedural programming and problem-solving.</p>
      </div>
      </div>
     


     <div className="bg-amber-50 w-[300px] shadow-2xl sm:w-[400px]  md:w-[450px] rounded-2xl pt-4 mb-10 flex flex-col justify-center   ">
           <img className="w-[30px] mx-auto mb-5" src="/images/certificate-icons.webp" alt="" />
         <div className="bg-white p-2 rounded-2xl">
          <p className="font-bold p-3">C++ Programming</p>
          <p className="font-medium">I learned the fundamentals of C++ programming, including object-oriented concepts, functions, arrays, and pointers. I also developed strong logical thinking and problem-solving skills.</p>
      </div>
      </div>
    </div> 
        <div className="bg-amber-50 w-[300px] shadow-2xl sm:w-[400px]  md:w-[450px] rounded-2xl pt-4 mb-10 flex flex-col justify-center   ">
           <img className="w-[30px] mx-auto mb-5" src="/images/certificate-icons.webp" alt="" />
         <div className="bg-white p-2 rounded-2xl">
          <p className="font-bold p-3">Mern Full satck developer</p>
          <p className="font-medium">    I learned full stack web development using the MERN stack including
      MongoDB, Express.js, React.js, and Node.js. I gained experience in
      building responsive front-end interfaces, creating REST APIs, and
      managing databases for modern web applications.</p>
      </div>
      </div>
      </div>
   
    </div>
  );
}

export default Certi;
