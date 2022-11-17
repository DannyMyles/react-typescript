import React from 'react'

type InputProps = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Input = (props:InputProps) => {
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);
    }
  return (
    <div>
        <input type="text" value={props.value}  onChange={handleChange}/>
    </div>
  )
}

export default Input

//type of Inputs and handling change event