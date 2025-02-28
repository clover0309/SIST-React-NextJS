import React from "react";

const styles = {
    backgroundColor: "orange",
    width: "100%",
    height: "100vh", // View Height의 약자 부모태그와 상관없이 무조건 꽉채운다.
    margin: 0,
    padding: 0
};

export default function Left(){
    return(
        <div style={styles}>
        <h1>
            쌍용교육센터
        </h1>
        </div>
    );
}