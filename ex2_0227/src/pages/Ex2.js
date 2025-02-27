import React, { useState } from "react";


//밑에서 export default를 지정해도 되고, 함수를 선언할 때 해도 상관없다.
export default function Ex2() {
    let 금고 = "ddd";
    //안에서 선언된 setStr은 유일하게 str값을 접근할 수 있는 값이다.
    const [str, setStr] = useState();

    function test(n) {
        //str변수에 "값 변경" 이라는 문자열을 저장했다.
        let msg = 0;
        switch(n){
            case 1:
                msg = 100;
                break;
            case 2:
                msg = 200;
                break;
            case 3:
                msg = 300;
                break;
        }
        setStr(msg);
    }
    
    return(
        <div>
            {/* 위에서 test함수에서 setStr에 "값 변경"이라는 값이 지정이 되었기 때문에
            str에 "값 변경"이 들어가게 된다. */}
            <h2>두번째 화면 : {str}</h2>
            {/* 인자값을 주기 위해서는 ()안에 인자값을 넣으면 된다 */}
            <button type="button" onClick={()=>test(1)}>변경1</button>
            <button type="button" onClick={()=>test(2)}>변경2</button>
            <button type="button" onClick={()=>test(3)}>변경3</button>
        </div>
    );
}

//export default page2;