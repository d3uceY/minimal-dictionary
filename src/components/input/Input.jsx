import React, { useState } from 'react'
import { useInput } from '../../context/InputContext'
import './inputStyle.css'


export default function Input() {

  //this is the state imported from the context that was created
  const { inputValue, setInputValue } = useInput()


  //this state is made, so that we can be able to store the 
  //value of the input temporarily
  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value)
      setValue("")
    }
  }


  const handleSubmit = () => {
    setInputValue(value)
    setValue("")
  }


  return (
    <div className='input-wrapper p-4 bg-grey-4 flex gap-2 md:flex-col justify-center md:justify-between items-center md:h-screen md:w-1/3'>
      <h1 className='md:text-2xl hidden md:block font-semibold text-grey-1 font-play header-text-1'>Minimal</h1>
      <div>
        <div className='input-container max-w-[300px] flex mx-auto h-[48px] rounded-lg overflow-hidden'>
          <input
            type="text"
            placeholder='search'
            className='w-[80%] p-4 bg-grey-1 placeholder:text-grey-3 placeholder:capitalize text-grey-4 font-semibold'
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={value}
          />

          <button
            className='w-[20%] flex justify-center items-center bg-grey-3 active:bg-grey-2 '
            onClick={handleSubmit}
          >
            <img className='' src="/src/assets/search.svg" alt="search-icon" />
          </button>
        </div>

        {/* {inputValue && (<p className='text-grey-1 text-center capitalize font-bold mt-2'>result for: <span className='font-light'> {inputValue}</span></p>
        )} */}
      </div>
      <p className='md:text-2xl font-semibold text-grey-1 font-play hidden md:block header-text-2'>Dictionary</p>
    </div>
  )
}
