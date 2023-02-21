import React from 'react'
import {Grid} from "@material-ui/core"
import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
 <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
   <LoginForm />
  </Grid>   
   
</Grid> 
  )
}

export default Login