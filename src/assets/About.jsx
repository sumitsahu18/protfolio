
  function About(){
    return (
        <div className=" flex flex-col justify-center align-middle items-center">
             <p className="text-[45px] font-semibold mt-10 ">About Me</p>  
             <p className="font-semibold text-[22px] opacity-50">A Glimpse Into My Journey</p>  
             <div className="flex flex-col font-sans text-xl justify-around items-center lg:flex-row ">
                  <div className="w-[290px]  lg:w-[500px]  mt-10 lg:m-12 ">
                    <img className="rounded-xl h-[600px]"  src="/images/sumit5.jpeg" alt="" />
                  </div>
                  <div className="mt-10 p-2 flex lg:w- flex-col justify-center sm:items-center md:items-center lg:max-w-2xl">
                    <p className="text-[18px] leading-8">
                     I am <b>Sumit Sahu </b>, a Computer Science enthusiast and aspiring <b>Full Stack Developer</b> with a strong passion for coding and problem-solving. My journey in technology has been exciting and full of continuous learning.

I have learned <b>HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB</b>, and I enjoy building real-world web applications. I also created my ,<b>personal portfolio using React and Tailwind CSS</b> which is connected to <b>MongoDB using Node.js and Express.js</b> for backend functionality.

I have worked on several projects such as a <b>Password Generator, Todo App, Notes App, Emoji Finder, GitHub Profile Viewer, Image Finder, and Tic Tac Toe</b>, which helped me strengthen my development skills and understanding of frontend and backend technologies.

I am always eager to learn new technologies, improve my problem-solving skills, and grow as a developer while working on impactful projects in the field of web development.

                    </p>  
                    <button className="bg-black mt-8 w-[200px] lg:mt-20 p-3 text-amber-50 rounded-2xl"><a href="/resume.pdf" download >Download Resume</a></button>
                  </div>
             </div>
        </div>
    )
  }
  export default About