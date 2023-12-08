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
      t1.to(['#intro-1, #intro-2'], {
        x: 0,
        duration: 1,
        ease: "bounce.inOut"
      }
      )
        .to('#intro-1', {
          x: '-200vh',
          duration: 1,
          ease: "bounce.inOut",
          delay: .25
        })

        .to('#intro-2', {
          x: '200vh',
          duration: 1,
          ease: "bounce.inOut",
        })

        .to(".overlay", {
          y: '100vh'
        })
    }, comp)

    return () => ctx.revert()
  }, [])


  return (
    <InputContextProvider>
      <div className="app bg-grey-1 min-h-screen relative overflow-hidden" ref={comp}>
        <div className=' overlay absolute bg-grey-1 top-0 left-0 z-10 w-full h-full'>
          <div id='intro-1' className='text-[15vw] absolute top-[5%] font-zen text-grey-4 translate-x-[-200vh]'>MINIMAL</div>
          <div id='intro-2' className='text-[15vw] absolute bottom-[5%] font-zen text-grey-4 translate-x-[200vh]'>DICTIONARY</div>
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
