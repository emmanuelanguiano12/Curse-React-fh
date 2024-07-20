import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startCheckingNote, startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  //mandar a llamar las propiedades que salen redux toolkit
  const {isSaving, active: note} = useSelector(state => state.journal)

  const dispatch = useDispatch()

  const onClickNewNote = () => {  
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>

      {
        !!note ? <NoteView /> :<NothingSelectedView /> // !! convierte a booleano
      }

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
