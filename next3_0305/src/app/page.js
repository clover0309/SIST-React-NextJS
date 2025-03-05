'use client';
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "@/component/ItemList";
import { Divider } from "@mui/material";

export default function Home() {
  //api 경로를 사용하기 위해서 경로를 일부분만 가져온다.
  const api_url = "/api/v1/products.json?brand=maybelline";
  //값이 여러개 이므로 빈 배열을 배치함.
  //실제 데이터는 useState안의 list에 존재한다.
  const [list, setList] = useState([]);

  //비동기식 통신 수행.
  function callApi(){
    //api문서에서 get을 사용해서 통신한다고 표기되어 있으므로 get사용.
    //axios.get(api_url).then(function(res){}) 를 사용해도되고

    axios.get(api_url).then((res) => { // 를 사용해도된다.
      console.log(res);

      //data라는 녀석은 axios안에 항상 존재한다.
      //res안에 data가 있으니 res.data를 호출한다.
      setList(res.data);
    });
  }
  //현재 페이지가 읽혀질 때 한번 callApi를 호출함
  useEffect(() => {
    callApi();
  },[]); //두번째 세번째 부터는 2번째 인자에서 참조할 것이 없기 때문에, 더 이상 호출하지않음.
  return (
    <div className={styles.page}>
      <div style={{width: "80%", margin: "auto", paddingTop: "20px"}}>
        <h2>베스트상품</h2>
        <Divider/> {/* mui의 구분선 */}
        <ItemList list={list.slice(0,9)}/> {/* list를 잘라서 0번지부터 8번지까지만 나온다 */}
        
        <h2>신상품</h2>
        <Divider/> {/* mui의 구분선 */}
        <ItemList list={list.slice(9)}/> {/* list를 9번지부터 전부 출력함. 자바의 substring과 같음. */}
      </div>

    </div>
  );
}
