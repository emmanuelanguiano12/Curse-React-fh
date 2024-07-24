import { CalendarEvent, CalendarModal, FabAddEvent, FabDeleteEvent, Navbar } from ".."
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessagesES } from "../../helpers"
import { useState } from "react"
import { useUiStore, useCalendarStore } from "../../hooks"


export const CalendarPage = () => {
  const {openDateModal} = useUiStore();
  const {events, setActiveEvent} = useCalendarStore()

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#247CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    
    return {
      style
    }
  }


const onDoubleClick = (event) => {
  openDateModal()
  // console.log({doubleClick: event})
}

const onSelect = (event) => {
  setActiveEvent(event) //mandar el evento (payload) a setActiveEvent que viene del useCalendarSlice
}

const onViewChangues = (event) => {
  localStorage.setItem('lastView', event)
  setLastView(event)
}

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        culture='es'
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChangues}
      />

      <CalendarModal />
      <FabAddEvent />
      <FabDeleteEvent />
    </>
  )
}
