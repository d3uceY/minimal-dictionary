import Input from './components/input/Input.jsx'
import './App.css'
import { InputContextProvider } from './context/InputContext.jsx'
import Results from './components/Results.jsx'


function App() {
  return (
    <InputContextProvider>
      <div className="app bg-grey-1 min-h-screen">
        <main className='md:flex'>
          <Input />
          <Results/>
        </main>
      </div>
    </InputContextProvider>
  )
}

export default App
