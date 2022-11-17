import React from 'react'

type PersonProps ={
    name : {
        first : string,
        last : string
    }
}
const Person = (props:PersonProps) => {
  return (
    <div>HI {props.name.first} {props.name.last} </div>
  )
}

export default Person
// Rendering Objects as props in React Typescript