import { useCallback, useEffect, useState } from 'react'
import './index.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbers, setnumbers] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState('')

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (char) str += "!@#$%^&*()-_=+[]{};:',.<>?/|`~"

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setpassword(pass)
  }, [length, numbers, char])

  useEffect(() => {
    passwordgenerator()
  }, [length, numbers, char, passwordgenerator])

  return (
    <div className="bg-[#0f172a] flex justify-center items-center min-h-screen">
      <div className="bg-[#1e293b] rounded-lg p-6 w-96">
        <h1 className="text-center text-white text-lg font-medium mb-4">
          Password generator
        </h1>
        <div className='flex gap-2 mb-3'>
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            className="w-full px-3 py-2 rounded bg-white text-gray-900 placeholder-gray-400 outline-none"
          />
          <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={() => {navigator.clipboard.writeText(password)}}
          >Copy</button>
        </div>
        <div className='flex flex-col gap-y-2 text-sm'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={e => setlength(Number(e.target.value))}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              checked={numbers}
              id='numberinput'
              onChange={() => setnumbers(prev => !prev)}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              checked={char}
              id='characterinput'
              onChange={() => setchar(prev => !prev)}
            />
            <label htmlFor="characterinput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
