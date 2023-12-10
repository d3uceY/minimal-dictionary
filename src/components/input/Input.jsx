import React, { useState } from 'react'
import { useInput } from '../../context/InputContext'
import './inputStyle.css'
import search from '../../assets/search.svg'


export default function Input() {

  //this is the state imported from the context that was created
  const { inputValue, setInputValue } = useInput()


  //this state is made, so that we can be able to store the 
  //value of the input temporarily
  const [value, setValue] = useState("")


  //whenever the input value changes, it runs a function that updates the value state
  const handleInputChange = (e) => {

    setValue(e.target.value)

  }


  //this funtion runs when any key is pressed and it checks whether the key is an Enter key
  //then it sets inputValue to hold the value and removes it from value
  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      setInputValue(value)

      setValue("")

    }
  }


  //does the same thing the code above does
  const handleSubmit = () => {

    setInputValue(value)

    setValue("")

  }


  return (
    <header className='input-wrapper p-4 bg-grey-4 flex gap-2 md:flex-col justify-center md:justify-between items-center md:h-screen md:w-1/3'>
      <h1 className='md:text-2xl hidden md:block font-semibold text-grey-1 font-play header-text-1'>Minimalist</h1>
      <div>
        <div className='input-container max-w-[300px] flex mx-auto h-[48px] rounded-lg overflow-hidden focus-within:outline focus-within:outline-2 focus-within:outline-offset-0 focus-within:outline-grey-2'>
          <input
            type="text"
            placeholder='search'
            className='w-[80%] p-4 bg-grey-1 placeholder:text-grey-3 placeholder:capitalize text-grey-4 font-semibold '
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={value}
            aria-label='search bar. press enter to search'
          />

          <button
            className='w-[20%] flex justify-center items-center bg-grey-3 active:bg-grey-2'
            onClick={handleSubmit}
            aria-label='press enter to search'
          >
            <img src={search} alt="search-icon" />
          </button>
        </div>

        {/* {inputValue && (<p className='text-grey-1 text-center capitalize font-bold mt-2'>result for: <span className='font-light'> {inputValue}</span></p>
        )} */}
      </div>
      <h2 className='md:text-2xl font-semibold text-grey-1 font-play hidden md:block header-text-2'>Dictionary</h2>
    </header>
  )
}
