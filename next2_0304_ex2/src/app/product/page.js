"use client"
import { useState } from "react";

export default function Product() {
    let ar = [
        {FruitName:"사과",FruitPrice:'12000',FruitImg:"/images/fruit0.png"},
        {FruitName:"파인애플",FruitPrice:'20000',FruitImg:"/images/fruit1.png"},
        {FruitName:"샤인머스켓",FruitPrice:'25000',FruitImg:"/images/fruit2.png"},
    ]

    //각 과일의 수량들만 저장한 배열.
    //초기값으로 0,0,0 지정.
    const [cnt, setCnt] = useState([0,0,0]);


    return(
        <div>
            <h1 className="title">제품들</h1>
            <hr/>
            {ar.map( (fruit, i) => 
                <p className="box" key={fruit.FruitName}>
                <header>
                    <h4>{fruit.FruitName}</h4>
                    <p>{fruit.FruitPrice}원</p>
                    <img className="fruit_img" src={`/images/fruit${i}.png`}/>
                    
                    
                </header>
                <p className="bottom">
                        <span>
                            <button type="button" className="btn"
                            onClick={function () {
                                let copy_cnt = [...cnt];

                                copy_cnt[i]--;

                                setCnt(copy_cnt);
                            }}> - </button>
                            {cnt[i]}
                            <button type="button" className="btn" 
                            onClick={function (){
                                //기존의 cnt배열의 내용을 복사한다. (**중요**)
                                let copy_cnt = [...cnt];

                                //클릭했을때 cnt값이 늘어나는 곳.
                                // cnt[i]의 요소를 1증가 시킨다.

                                // 여기서 copy_cnt는 복사된 배열의 요소다.
                                // 복사된 배열을 통해서 만약 cnt안에 값이 1,2,0 이였다면,
                                // 인덱스1번에서 지금 버튼을 눌렀다면, 1,3,0이 된다.
                                copy_cnt[i]++;

                                //가져온 값으로 setCnt를 통해 copy_cnt의 값으로 변경한다.
                                setCnt(copy_cnt);
                            }}> + </button>
                        </span>
                    </p>
                </p>
            )}
        </div>
    );
}