import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store"

export const useCalendarStore = () => {
    const dispatch = useDispatch()

    const {events, activeEvent} = useSelector(state => state.calendar) //esto es lo que viene en la interfaz de redux

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {


        if(calendarEvent._id){
            //se está actualizando un evento
            dispatch(onUpdateEvent({...calendarEvent}))
        } else {
            //se está creando un evento
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }

    const startDeletingEvent = () => {
        //TODO: llegar al backend
        
        dispatch(onDeleteEvent())
    }
    
    //store -> slice -> useSlice -> page.jsx
    return {
        //* Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //? Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,

    }
}
