import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"



export const Navbar = ({drawerWidth}) => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth")
  }




  return (
    <AppBar 
        position='fixed'
        sx={{
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          ml:{sm:`${drawerWidth}px`}
        }}
    >

        <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={ {mr:2, display: {sm:'none'} } }
            >
                <MenuOutlined/>
            </IconButton>

              <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'>JournalApp</Typography> 

                <IconButton color="error" onClick={goToLogin}>
                  <LogoutOutlined />
                  
                </IconButton>

              </Grid>



        </Toolbar>
    </AppBar>
  )
}
