import {useState} from 'react'
type AuthUser ={
    email: string,
    name :string
}
const User = ({email,name}:AuthUser) => {
    const [user, setUser] =useState<AuthUser |null>(null)
    const handleLoggedIn =()=>{
        setUser({
            name :"Muhadi",
            email: "m@gmail.com"
        })
    }
    const handleLoggedOut =()=>{
        setUser(null)
    }
    
  return (
    <div>
        <button onClick={handleLoggedIn}>Login</button>
        <button onClick={handleLoggedIn}>LogOut</button>
        <div>
            <h2>User name is {user?.name}</h2>
            <h2>User emain is {user?.email}</h2>
        </div>
    </div>
  )
}

export default User