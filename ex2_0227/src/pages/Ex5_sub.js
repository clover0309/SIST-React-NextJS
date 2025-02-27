import React from "react";

//전달되는 여러가지 속성들 중에 year만 받을 때는 안에 인자 값을 {year}를 사용해야한다.
export default function Ex5_sub({year}) {
    return (
        <h1>운수대통: {year}</h1>
    );
}