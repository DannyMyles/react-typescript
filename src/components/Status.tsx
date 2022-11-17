import React from 'react'

type StatusProps={
    status : 'loading' | 'success' | 'error',
}
const Status = (props:StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message ='Loading ...'
    }else if(props.status === "success"){
        message = "Data Fetched successfully"
    }else if (props.status === "error"){
        message = "Error fetching Data"
    }
  return (
    <div>
        <h3>Status {message}</h3>
    </div>
  )
}

export default Status

//Union methods of sting literals as status type