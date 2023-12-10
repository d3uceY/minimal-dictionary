import React, { useEffect, useState, useLayoutEffect, useRef, useReducer } from 'react'
import gsap from 'gsap'
import axios from 'axios'
import { useInput } from '../context/InputContext'
import Meaning from './Meaning.jsx'
import Phonetic from './Phonetic'
import PartOfSpeech from './PartOfSpeech.jsx'
import { useResponse } from '../context/InputContext'

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en"


export default function Results() {
    //state for the response gotten from the api (the state is stored in the input context)
    const { response, setResponse } = useResponse()

    //state for catching the error
    const [error, setError] = useState(null)

    //state for getting the loading state
    const [loading, setLoading] = useState(null)


    //state for the meanings render (this stores the meaning of the word)
    const [meaning, setMeaning] = useState('')


    //this state stores the values for the phonetics
    const [phonetic, setPhonetic] = useState('')


    //this is for the state that stores the part of speach
    const [partOfSpeach, setPartOfSpeach] = useState('')


    //this is the state that holds the word
    const [word, setWord] = useState("")


    //this contains the state from the context api holding the value from the input
    const { inputValue } = useInput()


    //gsap code
    const comp = useRef()

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            const t1 = gsap.timeline()

            t1.from(["#word", "#phonetics", "#meaning"], {
                opacity: 0,
                stagger: .5,
                duration: .5,
                y:10
            })

        }, comp)

        return () => ctx.revert()

        //when response changes, the code will run
    }, [response])

    //gsap code



    
    //this funtions runs whenever useeffect detects that the inputValue has changed.
    //(param) is the inputValue
    const fetchData = async (param) => {

        try {
            //loading state is set to true
            setLoading(true);

            //this holds takes the response from axios
            const res = await axios(`/${param}`)

            setResponse(res.data)

            setWord(param)

            setMeaning(res.data[0].meanings[0].definitions[0].definition)

            setPhonetic(res.data[0].phonetics[0].text)

            setPartOfSpeach(res.data[0].meanings[0].partOfSpeech)

            setError(null)

        }

        catch (err) {

            setError(err)

        }

        finally {

            setLoading(false)

        }
    }



    //this function runs once the input value changes, when function is run
    //fetch data sync funtion will run to fetch the api
    useEffect(() => {

        if (inputValue.length) {

            fetchData(inputValue)

        }

    }, [inputValue])


    //if loading is true 
    if (loading) {

        return (

            <div className='flex h-[75vh] lg:h-screen items-center px-4'>
                <div className='flex flex-col animate-pulse w-[600px] max-w-lg'>
                    <div className='md:h-[8rem] h-[4rem] bg-grey-3 mb-3 w-full rounded-2xl'></div>
                    <div className='md:h-[4rem] h-[2rem] bg-grey-3 w-full rounded-2xl'></div>
                    <div className='md:h-[10rem] h-[5rem] bg-grey-3 mt-4 w-full rounded-2xl'></div>
                </div>
            </div>

        )
    }


    //if there is an error
    if (error) {

        return (

            <div className='ml-4 lg:ml-7 h-[75vh] lg:h-screen flex items-center'>
                <p className='text-grey-4'>
                    <span className='font-mono text-2xl font-semibold'>ERROR: 404</span>
                    <br />
                    not found
                </p>
            </div>

        )
    }



    return (

        <div ref={comp} className="results lg:px-11 px-6 flex h-[75vh] lg:h-screen items-center">

            {response && (

                <div>
                    <h2 className='font-mono text-[2rem] md:text-[5rem] lg:text-[7rem] text-grey-4 lowercase'
                        id='word'
                        tabIndex="0"
                        aria-label={`the word is ${word}`}>
                        {word}
                    </h2>

                    <div className='font-edu lg:text-2xl md:text-xl mb-3 font-bold flex items-center gap-4'
                        id='phonetics'
                        tabIndex="0"
                        aria-label={`part of speach is ${partOfSpeach}`}>
                        <Phonetic mean={phonetic} />
                        <PartOfSpeech mean={partOfSpeach} />
                    </div>

                    <div className='font-mono max-w-md text-grey-4 md:text-[1.5rem] mt-7'
                        id='meaning'
                        tabIndex="0"
                        aria-label={`definition for ${word} is ${meaning}`}>
                        <Meaning mean={meaning} />
                    </div>

                </div>

            )}
        </div>
    )

}
