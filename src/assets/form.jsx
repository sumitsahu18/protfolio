import { useState } from "react";

  function Form(){

     const [data,setdata] = useState({name:"",email:"",review:""})
     const [error,seterror] = useState({})

     
  async function formsubmit(e){
  
      e.preventDefault(); 

     let newerror = {};

      if(data.name.trim().length < 3){
        newerror.name = "Name include atleast 3 character"
      }

        let emailpattern=/^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  

      if(!emailpattern.test(data.email) || data.email.length<=0 ){
        newerror.email = "Enter the valid email"
      }

      if(data.review.trim().length < 4){
         newerror.review = "Review include atleast Four character"
      }
      seterror(newerror)
     
      if(Object.keys(newerror).length !== 0){
    return;
  }

      if(Object.keys(newerror).length ===0){
          alert("message send sucssesfully")  
        //  console.log(data)
      }    
     
      console.log("clicked")


         
       let data1 =  await fetch("http://localhost:3000/users" , {
         method : "POST",
         headers  : {
            "Content-Type": "application/json"
         },
         body : JSON.stringify(data)
       })
       let res = await data1.json();

       alert(res.message)

   }
    
  async function handleform(e){
       
       setdata((predata) => 
        ({...predata ,[e.target.name]:e.target.value
       })) 

    
  }

    return (
        <form onSubmit={formsubmit}> 

        <div className=" bg-white md:w-[390px] w-[300px] lg:w-xl rounded-2xl p-4 mt-7 shadow-2xl">
        <div className="text-center">
          <p className="text-[40px] font-semibold mt-2 text-shadow-rose-200">
            Write a review
          </p>
        </div>
        
        <div className="mt-4  relative">
          <div className=" absolute  bg-[#fafafa] text-[14px] rounded-t-xl pl-1 pr-1  max-w-max font-sans font-semibold left-6 -top-3 mb-2">
            <label>Name</label>
          </div>

          <div className=" p-2  rounded-xs border-1 ">
            <input
              id="name"
              name = "name"
              type="text"
              placeholder="Enter your name"
              className="border-none outline-none"
              onChange={handleform}
              value={data.name}
            />
          </div>
           {error.name && (
              <div className="text-red-500">{error.name}</div>
             )}
        </div>

        <div className="mt-4  relative">
          <div className=" absolute  bg-[#fafafa] text-[14px] rounded-t-xl pl-1 pr-1  max-w-max font-sans font-semibold left-6 -top-3 mb-2">
            <label>Email</label>
          </div>

          <div className=" p-2  rounded-xs border-1  mt-6">
            <input
              id="email"
              name ="email"
              type="text"
              placeholder="Enter your Email"
              className="border-none outline-none"
              onChange={handleform}
              value={data.email}
            />
          </div>
            {error.email && (
  <div className="text-red-500">{error.email}</div>
)}
        </div>

        <div className="mt-4  relative">
          <div className=" absolute  bg-[#fafafa] text-[14px] rounded-t-xl pl-1 pr-1  max-w-max font-sans font-semibold left-6 -top-3 mb-2">
            <label>Review</label>
          </div>

          <textarea
             id="review"
             name = "review"
            className=" p-2  rounded-xs border-1 bg-[#fafafa]"
            placeholder="Write your reviews"
            cols={35}
            rows={4}
            onChange={handleform}
            value={data.review}
          ></textarea>
          {error.review && (
  <div className="text-red-500">{error.review}</div>
)}
        </div>

        <div className="btn">
          <div className="bg-black  text-center p-3 rounded-full mt-4">
            <button type="submit" className="text-white font-bold">Send Message</button>
          </div>
        </div>
      </div>
     </form> 
    )
      
  }
  export default Form

    // function valid(e){
    //     e.preventDefault();
    //     let res = true;

    // let name  = document.getElementById("name").value.trim();
    // //  console.log(name)
    // let email = document.getElementById("email").value.trim();
    // // console.log(email)
    // let review = document.getElementById("review").value.trim();
    // // console.log(review)

    //  document.querySelectorAll(".err").forEach(e => e.innerHTML ="");

    //   if(name.length<3){
    //       res = false;
    //       document.getElementById("nameerr").innerHTML = "name atleat 3 three digits"
    //   }

    //    let emailpattern=/^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  

    //    if(!emailpattern.test(email)){
    //     res=false;
    //     document.getElementById("Emailerr").innerHTML = "pls fill currect email"
    //    }

    //    if(review.length<4){
    //     res=false;
    //     document.getElementById("texterr").innerHTML = "review at least 4 digit"
    //    }
    //     return res

    // }
  