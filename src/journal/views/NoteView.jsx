import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"



export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1, mt: 8 }}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>20 de Junio de 2024</Typography>
        </Grid>
        <Grid>
            <Button color="primary" sx={{padding:2}}>
                <SaveOutlined sx={{ fontSize:30, mr:1 }}/>
                Guardanr
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="TÍtulo"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió hoy?"
                minRows={5}
            />
        </Grid>

        <ImageGallery />


    </Grid>
  )
}
