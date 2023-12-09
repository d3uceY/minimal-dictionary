import Input from './components/input/Input.jsx'
import './App.css'
import { InputContextProvider } from './context/InputContext.jsx'
import Results from './components/Results.jsx'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

function App() {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.to(['#intro-1'], {
        x: 0,
        duration: 2,
        ease: "circ.inOut",
        opacity: 1
      }
      )
        .to('#intro-1', {
          x: '-100%',
          duration: 1,
          ease: "circ.inOut",
          delay: .25,
          opacity: 0
        })

        .to('.quote-text', {
           opacity:1,
        })

        .to('.quote-text', {
          opacity: 0,
          delay:2
        })

        .to(".overlay", {
          y: '100vh',
        })

        .from('h1', {
          opacity: 0
        })

        

        .from('.input-container', {
          opacity: 0
        })

        .from('.header-text-2', {
          opacity: 0
        })


    }, comp)

    return () => ctx.revert()
  }, [])


  return (
    <InputContextProvider>
      <div className="app bg-grey-1 min-h-screen relative overflow-hidden" ref={comp}>
        <div className=' overlay absolute bg-grey-1 top-0 left-0 z-10 w-full h-full'>
          <div id='intro-1' className='text-[15vw] md:text-[20vw] top-[20%] lg:text-[25vw] absolute lg:top-[1%] font-play text-grey-4 translate-x-[-100%] opacity-[0.1]'>Minimal</div>
          <div className='quote-text font-edu p-5 text-2xl max-w-md opacity-0'>
            "In the sparse pages of a dictionary, find the essence of minimalism—where each word holds its place with purpose, and simplicity unveils the true richness of language."
          </div>
        </div>
        <main className='md:flex'>
          <Input />
          <Results />
        </main>
      </div>
    </InputContextProvider>
  )
}

export default App
