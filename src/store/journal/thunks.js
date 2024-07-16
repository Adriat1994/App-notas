import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, NoteUpdated, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";



export const startNewNote = () => {

    return async(dispatch, getState) => {

        dispatch(savingNewNote());

        
        const {uid} = getState().auth;

        //almacenamos con el uid del usuario

        const newNote = {
            id: '',
            title: '',
            body: '',
            date: new Date().getTime(),
            imageURLs: []            
        };

        const notesCollectionRef = collection(FirebaseDB, `${uid}/journal/notas`);

        const newDoc = doc(notesCollectionRef);
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }

}


export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;
        if (!uid) throw new error('El uid no existe');

        const notes = await loadNotes(uid);

        //console.log(notes);

        dispatch(setNotes(notes));

    }
}


export const StartSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notas/${note.id}`);
        await setDoc(docRef, noteToFireStore, {merge:true});

        dispatch(NoteUpdated(note));

    }
}


export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        //await fileUpload(files[0]);

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosURLs = await Promise.all( fileUploadPromises );
        //console.log(photosURLs);

        dispatch(setPhotosToActiveNote(photosURLs));


    }
};


export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        //console.log({uid, note});

        const docRef = doc(FirebaseDB, `${uid}/journal/notas/${note.id}`);
        const res = await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));


    }
};