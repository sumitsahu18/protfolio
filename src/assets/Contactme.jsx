 
  import Form from "./form";

function Contact() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-[45px] font-semibold mt-10 ">Contact ME</p>
        <p className="font-semibold text-[22px] opacity-50">Get in Touch</p>
      </div>
       <div className="md:flex md:gap-16 md:32 lg:gap-32">
      <div className=" gap-5 ">
        <div className="w-[300px] mt-6 bg-white shadow-2xl rounded-2xl p-3 flex flex-col justify-center items-center">
          <div className="m-4">
            <img src="/images/bx-mail-send.svg" alt="" />
          </div>
          <div>
            <p className="font-semibold text-2xl">Email</p>
          </div>
          <div className="m-4">
            <p>Sumitsahu182004@gamil.com</p>
          </div>
          <div className="m-4 bg-blue-50 rounded-2xl p-2">
            <p>Write me →</p>
          </div>
        </div>

        <div className="w-[300px] mt-6 bg-white shadow-2xl rounded-2xl p-3 flex flex-col justify-center items-center">
          <div className="m-4">
            <img src="/images/bxl-whatsapp.svg" alt="" />
          </div>
          <div>
            <p className="font-semibold text-2xl">Whatsapp</p>
          </div>
          <div className="m-4">
            <p>7067099931</p>
          </div>
          <div className="m-4 bg-blue-50 rounded-2xl p-2">
            <a href="https://web.whatsapp.com/"><p>Write me →</p></a>
          </div>
        </div>

        <div className="w-[300px] mt-6 bg-white shadow-2xl rounded-2xl p-3 flex flex-col justify-center items-center">
          <div className="m-4">
            <img className="w-[40px]" src="/images/lin.png" alt="" />
          </div>
          <div>
            <p className="font-semibold text-2xl">LinkedIn</p>
          </div>
          <div className="m-4">
            <p>Sumit sahu</p>
          </div>
          <div className="m-4 cursor-pointer bg-blue-50 rounded-2xl p-2">
           <a href="https://www.linkedin.com/feed/"><p>Write me →</p></a>
          </div>
        </div>
      </div>


     <div className=" gap-7 ">
        <Form/>

      <div className="map md:w-[390px] w-[300px]  lg:w-xl mt-14  rounded-2xl">
        <iframe
          src="https://www.google.com/maps?q=22.691094,75.819072&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

      </div>
    </div>
  );
}
export default Contact;
