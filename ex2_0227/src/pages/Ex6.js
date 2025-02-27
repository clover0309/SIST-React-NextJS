import React, { useState } from "react";
import styles from "../css/Ex6.module.css"
import data from "../data/data.json"
import Ex6_table from "../pages/Ex6_table"

export default function Ex6() {
    const [id, setId] = useState(1);
    function updateId(e) {
        setId(e.target.value);
    }
    return(
        <div>
            <ul className="{styles.m_list}">
                {
                data.subject.map(sub => (
                    <li key={sub.id} onClick={updateId} value={sub.id}>{sub.title}</li>
                ))
                }
            </ul>
            <Ex6_table idx={id}/>
        </div>
    );
}