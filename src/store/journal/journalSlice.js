import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null,
         active: {
         id: '',
         title: '',
         body: '',
         date: '',
         imageURLs: [] //array de URLS
        }
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        NoteUpdated: (state, action) => {
            state.isSaving = false;
            //console.log(action);
            state.notes = state.notes.map((note) => {

                if (note.id === action.payload.id) {
                    return action.payload
                }

                return note;

            });

            state.messageSaved = `Nota ${action.payload.id} actualizada correctamente`;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageURLs = [...state.active.imageURLs, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '',
            state.notes = [],
            state.active = null;
        }
    }
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, NoteUpdated, deleteNoteById, savingNewNote, setPhotosToActiveNote, clearNotesLogout } = journalSlice.actions;