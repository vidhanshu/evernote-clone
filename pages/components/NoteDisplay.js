import React, { useLayoutEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { app, db } from "../firebase.config";

function NoteDisplay({ mode }) {
    const [notes, setNotes] = React.useState([]);

    const ndb = collection(db, 'notes');

    const getNotes = () => {
        onSnapshot(ndb, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                doc.data &&
                    items.push({ ...doc.data(), id: doc.id });
            });
            setNotes(items);
        })
    }

    const deleteNote = (id) => {
        deleteDoc(doc(db, "notes", id))
    }

    useLayoutEffect(() => {
        getNotes();
    }, [])

    return (
        <div className={styles.notesContainer}>
            <div>
                {
                    notes.map((note, index) => (
                        <div className={styles.noteCard} key={index}
                            style={{
                                backgroundColor: mode ? '#000' : '#fff',
                                color: mode ? '#fff' : '#000'
                            }}
                        >
                            <h1>{note.title}</h1>
                            <p dangerouslySetInnerHTML={
                                { __html: note.description }
                            }></p>
                            <button onClick={() => deleteNote(note.id)} className={styles.redButton}>
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default NoteDisplay