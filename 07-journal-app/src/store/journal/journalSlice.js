import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        state: ''
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            
            state.notes.push(action.payload);
            state.isSaving = false

        },
        setActiveNote: (state, action) => {
            state.active = action.payload; //estos son los parametros que aparecerán en redux toolkit
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
            state.messageSaved = '';
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => { //payload = nota actualizada
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    return action.payload;
                }

                return note
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload )
        },
        clearNotesLogout: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]
            state.isSaving = false;
        },
    }
});
// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout,
} = journalSlice.actions;