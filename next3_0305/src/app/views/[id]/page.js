"use client";
import Item from "@/component/item";
import axios, { Axios } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    //const id = params.id;도 가능하지만,
    const params = useParams();
    const id = params?.id; //이것도 가능하다.

    //이럴때 백틱을 사용한다.
    //문자열에 대한 조합에 대해서 변수를 사용할때 백틱을 사용함.
    const api_url = `/api/v1/products/${id}.json`;
    
    // 비어있는 JSON형태를 만든다. (받는 값들이 JSON)
    const [vo,setVO] = useState({});

    function getData() {
        axios.get(api_url).then((res) => {
            console.log(res);
            setVO(res.data);
        })
    }

    //현재 문서에서 id변수의 값이 변경될 때 마다 서버 호출.
    useEffect(() => {
        if(id && id > 0){
            getData();
        }
    }, [id]); //<< 두번째 인자를 아이디로 잡아두고, 아이디값이 바뀌면 useEffect가 실행이됨.

    return(
        <div>
            <h3>{vo.name}</h3>
            <Item item={vo}/>
        </div>
    )
}