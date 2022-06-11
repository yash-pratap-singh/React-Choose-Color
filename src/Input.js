import React from 'react'
import colorNames from 'colornames'
const Input = ({colorValue,setcolorValue,setHexValue}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add Color Name: </label>
        <input type='text' placeholder='Add Color name' required value={colorValue} onChange={(e)=>{setcolorValue(e.target.value)
        setHexValue(colorNames(e.target.value))}} />
    </form>
  )
}

export default Input