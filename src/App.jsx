import React from 'react'
import { useState } from 'react';

function App() {
  const [color , setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' 
    style={{background: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl' style={{cursor:'pointer'}}>

          <button onClick={() => setColor("green") } 
          className='outline-none px-4 py-1 rounded-full text-white' style={{background:'green'}}>green</button>
          
          <button onClick={() => setColor("red") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'Red'}}>Red</button>

          <button onClick={() => setColor("chocolate") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'chocolate'}}>chocolate</button>

          <button onClick={() => setColor("crimson") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'crimson'}}>crimson</button>

          <button onClick={() => setColor("pink") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'pink'}}>pink</button>

          <button onClick={() => setColor("purple") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'purple'}}>purple</button>

          <button onClick={() => setColor("#212121") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'#212121'}}>black</button>

          <button onClick={() => setColor("darkgoldenrod") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'darkgoldenrod'}}>darkgoldenrod</button>

          <button onClick={() => setColor("cyan") } 
           className='outline-none px-4 py-1 rounded-full text-white' style={{background:'cyan'}}>Cyan</button>

        </div>
      </div>
    </div>
  )
}

export default App;
