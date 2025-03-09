'use client';
import BbsList from "@/component/BbsList";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const API_URL = "/board/list"

  //기본적으로 bname을 BBS로 둔다.
  const [bname, setBname] = useState('BBS');
  //게시판의 글을 가져오기위한 list 선언
  const [list, setList] = useState([]);
  //현재 기본페이지를 1로 둠.
  const [cPage, setCpage] = useState(1);
  const [totalPage, setTotalpage] = useState(0);

  //비동기식 통신을 수행하는 함수
  function callData() {
    //
    axios.get(
      API_URL,
      { params:{bname:bname, cPage:cPage}}
    ).then((json) => {
      //console.log(json)
        setList(json.data.ar);
        //setTotalPage를 json.data.totalPage안에 있는 값으로 지정함.
        //이때, totalPage는 SpringBoot에서 전달해준 JSON값이 존재해서
        // 전달이 가능해짐.
        setTotalpage(json.data.totalPage)
      }
    );
  }
  //callData를 useEffect안에서 호출하면 개발자 도구에서 값이 보이게 된다.
  useEffect(() => {
    callData();
  }, [cPage]); //해당부분에서 cPage값을 넘겨줘야 페이지네이션이 제대로 실행이된다.

  // function changePage(e, p){
  const changePage = (e,p) => {
    //Paagination 에서 호출하는 함수는 두번째 인자로 페이지 값을 자동으로 전달함.
    console.log("cp : "+ p)
    setCpage(p);
  }


  return (
    <div className={styles.page}>
      {/* 여기서 인자값을 전달할때 함수도 같이 전달할 수 있음.
        cp라는 인자값으로 위에서 만들어둔 changePage함수를 전달 할 수 있음.
      */}
      <BbsList list={list} cp={changePage} tp={totalPage}/>
    </div>
  );
}
