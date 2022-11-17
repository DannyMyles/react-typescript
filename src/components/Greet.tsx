import React from 'react'

type GreetProps ={
    name : string,
    messageCount:  number,
    isLoggedIn:boolean;
}
const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>
        {props.isLoggedIn ? `Greet ${props.name} you have ${props.messageCount} unread messages`: 'Welcome Guest'}`
        </h2>
    </div>
  )
}

export default Greet

//Rendering boolean, srings and numbers in Reacr Typescript