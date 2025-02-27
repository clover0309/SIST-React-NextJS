import React, { useState } from "react";

//앞의 키값으로 접근하기 때문에, 순서는 상관이 없이 출력이 가능하다.
// const list = [
//     {num:"1", email:"test@test.com", name:"마루치"},
//     {num:"2", email:"test2@test.com", name:"이루치"},
//     {num:"3", email:"test3@test.com", name:"삼루치"},
//     {num:"4", email:"test4@test.com", name:"사루치"},
//     {num:"5", email:"test5@test.com", name:"오루치"}
// ];


//JSON형태의 객체 member가 인자값으로 들어옴.
function Data({member}) {

    return(
        <tr>
            <td>{member.num}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
        </tr>
    );
}

export default function Ex4() {
    const [list, setList] = useState([
        {num:"1", email:"test@test.com", name:"마루치"},
        {num:"2", email:"test2@test.com", name:"이루치"},
        {num:"3", email:"test3@test.com", name:"삼루치"},
        {num:"4", email:"test4@test.com", name:"사루치"},
        {num:"5", email:"test5@test.com", name:"오루치"}
    ]);
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>

                {/*
                    --강사님 설명--
                    list로부터 하나씩 가져와서 VO에 저장한후,
                    Data라는 함수 컴포넌트를 호출할 때 인자인 member라는 변수에
                    vo를 전달해준다.
                */}

                {/* 
                    --내가 정리한것--
                list가 지정한 만큼 map이 호출이 된다.
                list에서 주는 요소가 vo안에 들어온다.
                vo를 Data함수에 던져줘야함.
                list를 map이 반복함, 그 안에 5개를 하나씩 빼서 안의 vo에 담음.
                그 vo를 Data라는 함수를 호출할때 member라는 함수에 vo의 값을 전달한다.
                이때, <tr>하나 씩 넘어와서 총 5개가 출력이된다.*/}
                {list.map(vo => <Data member={vo}/> )}
            </tbody>
        </table>
    );
}