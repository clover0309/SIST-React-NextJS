import React, { useState } from "react";

export default function Ex3() {
    //VO처럼 만들어서 사용.
    //안에서 값을 여러개 사용할땐 JSON 표기법 {}을 사용한다.
    //useState안에 있는 name, email, tel 변수들이 VO안에 자리 잡게된다.
    const [VO, setVO] = useState({name:"",email:"",tel:""});

    //이벤트 객체를 만들기위해 인자값 e 지정.
    //이벤트 객체만 만들땐 인자값 만 사용
    //특정 객체에게 이벤트를 걸때는 인자값.target을 사용.
    function editVO(e) {
        console.log(e.target.value);
        //지금 확인하는 값이 무엇인지? 알아내어 VO에 해당 변수에 대입하시오.
       
        //const {id,value} = e.target과 밑의 let 변수와 같다.
        let value = e.target.value;
        let id = e.target.id;
        
        //중괄호 안에 대괄호는 속성을 의미한다.
        // 이렇게 사용하게 되면 기존의 값을 덮어 씌어버리기 때문에, 사용하긴 힘들다.

        setVO({
            ...VO, //...은 스프레이드 속성을 의미한다. VO를 하나 복사해 놓는 개념.
            [id]:value
            })
    }

    return(
        <>
            <div>
                <label>이름</label>
                <input type="text" id="name" onChange={editVO}/>
            </div>

            <div>
                <label>이메일</label>
                <input type="text" id="email" onChange={editVO}/>
            </div>

            <div>
                <label>전화번호</label>
                <input type="text" id="tel" onChange={editVO}/>
            </div>

            <hr/>
            <p>이름: {VO.name}  </p>
            <p>이메일: {VO.email}  </p>
            <p>전화번호: {VO.tel}  </p>

        </>
    );
}