import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice";
import { useDispatch } from "react-redux";



export const SideBarItem = ({title = '', body, id, date, imageURLs = []}) => {

  const dispatch = useDispatch();

  const onClickSetNoteActive = () => {
    //console.log(note)
    //console.log(`${id}`)
    dispatch(setActiveNote({title, body, id, date, imageURLs}));
  }

  const newTitle = useMemo( () => {
    return title.length > 17
    ? title.substring(0,17) + '...'
    : title;
  }, [title])

  return (
    <ListItem disablePadding onClick={onClickSetNoteActive}>

        <ListItemButton>

            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>

            <Grid container>
                <ListItemText primary={newTitle} />
                <ListItemText secondary={body} />
            </Grid>

        </ListItemButton>

    </ListItem>
  )
}
