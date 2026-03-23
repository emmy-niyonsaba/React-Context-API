
import React ,{useState,createContext } from 'react'
import Child1 from './Child1'
import Parent from './Parent'
export const SamueContext = createContext()
function GrandParent() {
  const [data, setData] = useState({
    fName: 'Muzehe',
    LNamw: 'Waka',
    age:333,
    gendar: 'male',
    occupation: 'umuhinze',
    deadStatus: 'alive'

  })

  return (
    <>
    <SamueContext.Provider value={{data}}>
      <Parent />
      <Child1 />
    </SamueContext.Provider>
    
    </>
  )
}

export default GrandParent
