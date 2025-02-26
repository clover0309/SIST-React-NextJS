import React, { useState } from "react";
import "../css/ex4.css"

function Ex4() {
    const [txt, setTxt] = useState('insert text....');
    function setValue(e) {
        setTxt(e.target.value); //txt 값을 변경한다, 이벤트를 발생시킨 대상에 값이 변경된다.
    }
    return(
        <div>
            <input type="text" placeholder={txt}
                onChange={setValue}/>
            <br/>
            <p className="box">{txt}</p>
        </div>
    );
}

export default Ex4;