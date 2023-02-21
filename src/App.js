import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Box } from "@material-ui/core"
import "./App.css"
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Footer from "./components/Footer"


const App = () => {
  return (
    <Box width = "400px" sx = {{width:{x1: "1488px"}}} m = "auto">
        <Navbar/>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/exercise/:id" element = {<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App