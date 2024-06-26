import { Link as RouterLink, useNavigate } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"



export const LoginPage = () => {

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/')
  }



  return (
   
    <AuthLayout title="Login">

      <form>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder="correo@gmail.com"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label="contraseña" 
                  type="password"
                  placeholder="*********"
                  fullWidth
                />
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth onClick={goToMain}>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
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
