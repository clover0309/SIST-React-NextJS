'use client';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    // let ar = [
    //     {title:"안녕하세요.", content:"이런게 될까요?", date:'2025-03-02'},
    //     {title:"두번째 이야기", content:"금요일이 빨리 오기를", date:'2025-03-02'},
    //     {title:"문의드립니다.", content:"앱을 개발하고 싶은데..", date:'2025-03-02'}
    // ];

    const [ar, setAr] = useState([]);

    function setData() {
        //axios로 get방식 post방식을 요청이 가능하다.
        //백틱을 사용해야하고, done대신 then을 써야한다.
        //명시한 경로가 next.config.mjs를 가리킨다.

        //res는 spring에서 주는 json 값이 넘어온다.
        axios.get(`/notice/list`).then((res) => {
            //res안의 data라는 이름으로 json값이 들어온다.
            //setData를 호출한 순간, setAr로 값을 변경해준다.
            console.log("res : " + res)
            
            //res안에 data안에 ar안에 
            // 스프링부트에서 지정해 준 값이 있다.

            setAr(res.data.ar);
        });
    }

    //페이지가 열릴 때 한번 setData를 호출.
    //userEffect(function () {})와 밑은 의미가 같다.
    useEffect(() => {
        setData();
    });

    return(
        <div>
            <h1 className="title">공지사항</h1>
            <hr/>
            <div className="list-bg">
                {ar.map( (data, i) => (
                <div className="list-item" key={i}>
                    <h4>{data.content}</h4>
                    <p>{data.write_date}</p>
                </div>
                ))}
        </div>
    </div>
    );
}