'use client';
import MyCard from "@/component/MyCard";
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const API_URL = "/board/list?bname=";

    //json의 {}안의 첫시작이 들어온다.
    const[list, SetList] = useState([]);

    function callAPI(){
        //then안에는 함수가 정의되어야함
        axios.get(API_URL).then((response) =>{
            //항상 axios를 거치면 위의 함수명.data를 사용해서 값을 뽑아냄.
            SetList(response.data.ar); // useState값 변경경
        }); 
    }

    useEffect( () => { //익명함수 : 현재 페이지가 열릴때 한번 수행.
        callAPI();
    }, []); //대상이 없게해서 중복실행이 되는걸 막는다.

    return(
        <div className="list-bg">
            <h2>카드광고</h2>
            <Divider/>
            {/*MyCard에서 {ar}을 파라미터로 받고있으니
            ar을 인자로 받고, 현재는 useState안에 list안에 값이 들어있으니 {list}를 값으로
            전달해준다. */}
            <MyCard ar={list}/>
        </div>
    );
}