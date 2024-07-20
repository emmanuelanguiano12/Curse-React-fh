import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({title = '', body, id, date, imageUrls = []}) => {

    const { active, notes } = useSelector(state => state.journal)
    const dispatch = useDispatch()
    
    
    const onClickNote = () => {
        //siempre para llamar un slice se ocupa un dispatch
        dispatch (setActiveNote( {title, body, id, date, imageUrls} ) ) //Se manda el payload que ocupa
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title])
    
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
