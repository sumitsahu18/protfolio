
import './App.css'
import Bar from './assets/Bar'
import Intro from './assets/Intro'
import About from './assets/About'
import Skill from './assets/Skills'
import Other from './assets/Othertechnology'
import Certi from './assets/Certi'
import Prot from './assets/Protfolio'
import Contact from './assets/Contactme'


function App() {
  return (
    <>
      <div className=' w-full h-full flex flex-col justify-center items-center bg-[#dddfff]'>
        <div className='flex justify-center'>
           <Bar/>
        </div>
        <div id='Intro' className='flex justify-center align-middle items-center mt-20 mb-8 '>
            <Intro/>
        </div>

         <div className="w-full bg-black border-2"></div>         
        
        <div id='About' className='scroll-mt-20'>
              <About/>
        </div>

        <div  className="w-full bg-black border-2"></div>   

        <div id='Skill' className='scroll-mt-20'> 
           <Skill/>
        </div>

        <div >
           <Other/>
        </div>

        <div  className="w-full bg-black border-2"></div> 

        <div id='Certi' className='scroll-mt-20'>
              <Certi/>
        </div>

        <div className="w-full bg-black border-2"></div> 

        <div id='Prot' className='scroll-mt-20'>
                <Prot/>
        </div>

        <div className="w-full bg-black border-2"></div> 

        <div id='Contact' className='scroll-mt-20'>
             <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
