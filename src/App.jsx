import React from 'react'
import { useState } from 'react';
function App() {
  const [state, setState] = useState(0);
  return (
    <>
      <button onClick={() => {setState(state+1)}}>click me : {state}</button>    
      <button onClick={() => {setState(state+1)}}>click me : {state}</button>    

    </>
  )
}

export default App