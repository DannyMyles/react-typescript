import React from 'react'
type ButtonProps ={
    handleClick: (evt:React.MouseEvent<HTMLButtonElement>) =>void
}
const Button = (props:ButtonProps) => {
  return (
    <div>
        <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default Button

// Type of events React.MouseEvent<HTMLButtonElement>