import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useInput } from '../context/InputContext'
import Meaning from './Meaning.jsx'
import Phonetic from './Phonetic'
import PartOfSpeech from './PartOfSpeech.jsx'


axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en"


export default function Results() {
    //state for the response gotten from the api
    const [response, setResponse] = useState("")

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


    //this contains the state from the context api holding the value from the input
    const { inputValue } = useInput()


    const fetchData = async (param) => {

        try {
            setLoading(true);

            const res = await axios(`/${param}`)

            setResponse(res.data)

            setMeaning(res.data[0].meanings[0].definitions[0].definition)

            setPhonetic(res.data[0].phonetics[1].text)

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

    useEffect(() => {

        if (inputValue.length) {

            fetchData(inputValue)

        }
    }, [inputValue])




    if (loading) {
        return (
            <div className='flex h-screen items-center pl-4'>
                <div className='flex flex-col animate-pulse w-[600px] max-w-lg'>
                    <div className='md:h-[8rem] h-[4rem] bg-grey-2 mb-3 w-full rounded-2xl'></div>
                    <div className='md:h-[4rem] h-[2rem] bg-grey-2 w-full rounded-2xl'></div>
                    <div className='md:h-[10rem] h-[5rem] bg-grey-2 mt-4 w-full rounded-2xl'></div>
                </div>
            </div>
        )
    }

    if (error) {

        return (
            <div className='ml-4 flex items-center'>
                <p className='text-grey-4'>
                    <span className='font-mono text-2xl font-semibold'>ERROR: 404</span>
                    <br />
                    not found
                </p>
            </div>
        )
    }







    return (
        <div className="results pl-6 flex h-screen items-center">
            {response && (
                <div>
                    <h2 className='font-mono text-[2rem] md:text-[5rem] lg:text-[10rem] text-grey-4' id='word'>{inputValue}</h2>
                    <div className='font-edu lg:text-2xl md:text-xl mb-3 font-bold flex items-center gap-4' id='phonetics'>
                        <Phonetic mean={phonetic} />
                        <PartOfSpeech mean={partOfSpeach} />
                    </div>
                    <div className='font-mono max-w-md text-grey-4 md:text-[1.5rem] lg:text-[2rem] mt-7' id='meaning'>
                        <Meaning mean={meaning} />
                    </div>
                </div>
            )}
        </div>
    )
}