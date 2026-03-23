
import { useContext } from "react"
import { SamueContext } from "./GrandParent"
// import React {useContext}from 'react'

function Parent() {
    const {data} = useContext(SamueContext)
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Parent
