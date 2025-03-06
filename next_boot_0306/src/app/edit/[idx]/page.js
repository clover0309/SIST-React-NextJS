'use client';

import { Button, Card, CardContent, Divider } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";


export default function Page({params}){
    const {idx} = use(params);
    const API_URL = `/board/getBbs?b_idx=${idx}`;

    //JSON형태가 들어가니 빈 중괄호를 둔다.
    const[vo, SetVO] = useState({});

    function callAPI(){
        //then안에는 함수가 정의되어야함
        axios.get(API_URL).then((res) =>{
            console.log(res)
            //항상 axios를 거치면 위의 함수명.data를 사용해서 값을 뽑아냄.
            SetVO(res.data.vo); // useState값 변경
        }); 
    }

    useEffect( () => { //익명함수 : 현재 페이지가 열릴때 한번 수행.
        callAPI();
    }, [vo]); //대상이 없게해서 중복실행이 되는걸 막는다.


    return(
        <div>
            <header>
                <h2>편집하기</h2>
            </header>
            <hr/>
        <Card style={{width:'500px', margin:'20px auto'}}>
            <CardContent>
                <form action="/board/edit" method="post">
                    <input type="text" name="subject" defaultValue={vo.subject}/>
                    <input type="text" name="writer"  defaultValue={vo.writer} disabled/>
                    <textarea name="content" defaultValue={vo.content}></textarea>
                    <input type="hidden" name="b_idx" defaultValue={vo.b_idx}/>
                    <button type="submit">수정</button>
                </form>
            </CardContent>
        </Card>
        </div>
    );
}