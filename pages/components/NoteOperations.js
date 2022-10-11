import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import styles from "../../styles/Home.module.scss";
import { addDoc, collection } from "firebase/firestore";
import { app, db } from "../firebase.config";

function NoteOperations() {
    const [data, setData] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(false)

    const ndb = collection(db, 'notes');

    const saveNote = () => {
        if (data === '' || desc === '' || data === null || desc === null) return;

        setLoading(true);

        addDoc(ndb, {
            title: data,
            description: desc
        }).then(() => {
            setData('');
            setDesc('');
            setLoading(false);
        }).catch((e) => {
            alert(e.message);
            setLoading(false);
        })
    }
    return (
        <div className={styles.btnContainer}>
            <div className={styles.inputContainer}>
                <input onChange={e => setData(e.target.value)} value={data} className={styles.input} placeholder='Enter the Title..' />
                <div className={styles.reactQuill}>
                    <ReactQuill onChange={(e) => setDesc(e)} value={desc} />
                </div>
                <button disabled={loading} onClick={saveNote} className={`${styles.greenButton}`}>{loading ? 'saving...' : 'Save Note'}</button>
            </div>

        </div>
    )
}

export default NoteOperations