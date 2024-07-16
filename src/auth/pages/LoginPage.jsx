import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const {status, errorMessage} = useSelector( state => state.auth );

  const dispatch = useDispatch();  
  const { email, password, onInputChange } = useForm(formData);
  
  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (event) => {
    event.preventDefault();

    //console.log({email, password});

    dispatch(startLoginWithEmailPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    //console.log('login google');
    dispatch(startGoogleSignIn());
  }

  
  

  return (

   
    <AuthLayout title="Login">

      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder="correo@gmail.com"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="contraseña" 
                  type="password"
                  placeholder="*********"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt:1}} display={!!errorMessage ? '': 'none'}>
                <Grid item xs={12} sm={6}>
                  <Alert severity="error">
                    {errorMessage}
                  </Alert>
                </Grid>                
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={isAuthenticating} 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={isAuthenticating} 
                    variant="contained" 
                    fullWidth 
                    onClick={onGoogleSignIn}
                  >
                    <Google />
                      <Typography sx={{ml:1}}> Google </Typography>                    
                  </Button>
                </Grid>
              </Grid>


              <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>¿Aún no estás registrado?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Crea una cuenta
                </Link>
              </Grid>


            </Grid>


          </form>

    </AuthLayout>

          

        
  )
}
