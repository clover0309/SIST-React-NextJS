'use client';
import axios from "axios";
import styles from "../../page.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
    const {idx} = useParams();
    const API_URL = `/api/v1/bbs/${idx}`;
    const [bbs, setBbs] = useState({});

    //비동기식 통신을 하는 함수
    //url에 담겨있으므로 파라미터를 주지않아도 됨.
    function getBbs() {
        axios.get(API_URL).then( (res) => {
            setBbs(res.data.data);
            console.log(setBbs)
         });
    }

    useEffect(() => {
        getBbs();
    }, []);


    return(
        <main className={styles.main}>
            <h1>상세보기</h1>
            <hr/>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td colSpan={3}>{idx}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>{bbs.title}</td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td>{bbs.writer}</td>
                        <th>조회수</th>
                        <td>{bbs.hit}</td>
                    </tr>
                    <tr>
                        <th>등록일</th>
                        <td colSpan={3}>{bbs.write_date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>{bbs.content}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            [<Link href={"/bbs"}>뒤로가기</Link>]
                        </td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}