import React, {useState, useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from "@mui/material"

const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    const handleLogin = (e)=>{
        e.preventDefault()
        console.log(userName)
        console.log(email)
        setEmail("")
        setUserName("")
    }
  return (
    <Stack 
    alignItems = "center"
    justifyContent = "center"
    width = "100%"
    >
        <Typography 
        variant = "h4"
        fontWeight = "900">
            Sign In
        </Typography>
        <TextField
         sx = {{
        input: {fontWeight: "700",
        border: "none", 
        borderRadius: "4px"},
        width: {lg: "800px", xs: "350px"},
        backgroundColor: "#fff",
        borderRadius: "40px",
        }}
        height = "76px"
        value = {userName}
        onChange = {(e)=>setUserName(e.target.value.toLowerCase())}
        placeholder = "User Name or Email"
        type = "text"
        ></TextField>
         <TextField
         sx = {{
        input: {fontWeight: "700",
        border: "none", 
        borderRadius: "4px"},
        width: {lg: "800px", xs: "350px"},
        backgroundColor: "#fff",
        borderRadius: "40px"
        }}
        height = "76px"
        value = {email}
        onChange = {(e)=>setEmail(e.target.value.toLowerCase())}
        placeholder = "Password"
        type = "text"
        ></TextField>
        <Button 
        sx = {{
             backgroundColor: "#FF2625",
             color: "#fff",
             fontSize: {lg: "20px", xs: "14px"},
            width: "100%"
        }}
         onClick = {handleLogin}
         >Login</Button>
    </Stack>
  )
}

export default LoginForm