import React, { useState } from "react";
import styles from '../css/Ex6.module.css'
import data from '../data/data.json'

export default function Ex6_table(prop) {
    const [langId, setLangId] = useState(prop.idx);
    //data.json파일에서 prop의 값과 같은 값을 json파일의 lang영역에서 빼내온다.

    /*const lang_list = data.lang = [
        {"id":1, "subject":1, "title":"JavaScript", "level":1},
        {"id":2, "subject":3, "title":"UML", "level":3},
        {"id":3, "subject":1, "title":"TypeScript", "level":1},
        {"id":4, "subject":2, "title":"Java", "level":5},
        {"id":5, "subject":2, "title":"Spring", "level":6},
        {"id":6, "subject":1, "title":"React", "level":1},
        {"id":7, "subject":2, "title":"JSP/Servlet", "level":3},
        {"id":8, "subject":2, "title":"Python", "level":2},
        {"id":9, "subject":1, "title":"Vue", "level":2}
    ]; 
     data.lang.filter(function(element, index) {
        return element.subject === prop.idx
    })
    와 같은 코드가 밑에서 함축되어서 써져있다.
    */
   
    const lang_list = data.lang.filter(ln => ln.subject == prop.idx)
    
    return(
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>교과목</th>
                        <th>난이도</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    lang_list.map(
                        lang => {
                            return(
                                <tr key={lang.id}>
                                    <td>{lang.title}</td>
                                    <td>{lang.level}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </>
    );
}