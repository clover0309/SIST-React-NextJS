'use client';
import Link from "next/link";
import styles from "../../page.module.css"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
    
    const API_URL = "/api/v1/bbs";
    const [bbs, setBbs] = useState({});
    const router = useRouter();

    function handleChange(e) {
        //총 3개가 여기로 넘어온다. (input input textarea)
        const {name,value} = e.target;

        setBbs({...bbs, [name]:value})

        //기존의 bbs를 복사함.
        console.log({...bbs, [name]:value})

    }

    //비동기식 통신을 통해 서버에 데이터를 전송.
    function sendBbs() {
        //bbs라는 객체를 JSON화 시켜줘서 보내줌.
        axios.post(API_URL, JSON.stringify(bbs),{
            headers:{
                //json을 주고있다는걸 인지한다는 의미를 뜻함.
                "Content-Type":"application/json"
            }
        }).then( (res) => {
            //목록창으로 넘기기 res의 status가 200일 경우엔 성공했다는 의미이다.
            if(res.status == 200)
                router.push("/bbs")
        });
    }
    
    return(
        <main className={styles.main}>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>
                            <input type="text" id="title" name="title"
                            onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td colSpan={3}>
                        <input type="text" id="writer" name="writer"
                            onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>
                        <textarea cols={40} rows={5} id="content" name="content"
                            onChange={handleChange}/>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <Link href={"/bbs"}>
                                <button type="button">뒤로</button>
                            </Link>
                        </td>
                        <td>
                            <button type="button" onClick={sendBbs}>저장</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}