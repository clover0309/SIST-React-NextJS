import React, { useState } from "react";
import Ex5_sub from "./Ex5_sub";

//data는 Properties라고 하며, 인자라고 이해하면 된다.
// 이런 Properties는 이 컴포넌트 내에서 변경할 수 없다.
// data.year = 2000; 이런 것을 할 수 없다.
// 수정을 하기 위해서는 useState를 지정해줘야 한다.

//현재 data는 App.js에서 year={2025} str="쌍용교육센터" 이렇게 전달 받았다.
export default function Ex5(data) {

    //Properties여도 useState를 사용하면 값을 변경 할 수 있다.
    const [title, setTitle] = useState(data.str);
    const [year, setYear] = useState(data.year);
/*
    function change() {
        setTitle("이종엽");
    }
*/
    return(
        <div>
            <p>{title} ({year})</p>
            {/*Ex5_sub에서 {year}를 인자값으로 받고 있기 때문에
            인자값을 꼭 줘야한다. */}
            {/* Ex5_sub는 하나의 컴포넌트다. */}
            <Ex5_sub year={year}/>
            <hr/>
            {/*익명함수를 통해 값을 변경하는 것도 가능하다.*/}
            <button type="button" onClick={() => {
                //익명함수 영역.
                setTitle(title != '이종엽'?'이종엽':'');
                setYear(year+1);
            }}>변경</button>
        </div>
    );
}