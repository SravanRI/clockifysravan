import React, {useState,useEffect} from 'react'

function LoginForm() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    

    useEffect(() => {
        

    },[])

    const Login = () => {
        console.log(email,password)
    }
    return (
        <div style={{marginTop:'5rem',marginLeft:'8rem'}}>
            <h1>Login Page</h1>
            <input type='text' placeholder="email" value={email} onChange = {(e) => {setEmail(e.target.value)}}/>
            <br />
            <br />
            <input type='password' placeholder="password" value={password} onChange = {(e) => {setPassword(e.target.value)}}/>
            <br />
            <br />
            <button onClick = {Login}>Login</button>
        </div>
    )
}

export default LoginForm
