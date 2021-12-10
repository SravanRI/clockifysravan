import React, {useState,useEffect} from 'react'

function Register() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    

    useEffect(() => {
        

    },[])

    const Register = () => {
        console.log(name,email,password)
    }
    return (
        <div style={{marginTop:'5rem',marginLeft:'8rem'}}>
            <h1>Register Page</h1>
            <input type='text' placeholder="name" value={name} onChange = {(e) => {setName(e.target.value)}}/>
            <br />
            <br />
            <input type='text' placeholder="email" value={email} onChange = {(e) => {setEmail(e.target.value)}}/>
            <br />
            <br />
            <input type='password' placeholder="password" value={password} onChange = {(e) => {setPassword(e.target.value)}}/>
            <br />
            <br />
            <button onClick = {Register}>Register</button>
        </div>
    )
}

export default Register
