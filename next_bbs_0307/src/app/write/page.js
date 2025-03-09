'use client';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../page.module.css";

    //라우터를 사용하기 위한 router변수 지정.
    

export default function Write() {
    const router = useRouter();

    const API_URL = "/board/add";

    //서버로 보낼 파라미터 값들을 객체로 준비
    const [vo, setVO] = useState({
        subject:"",
        writer:"",
        content:""
    });
    //vo를 먼저 복사 해 온 후 작업을 해야한다. (안그러면 다른칸에 값이 바뀔때마다
    //다른 값들이 전부사라짐)
    function changeVO(e) {
        let bbs = {...vo};
        //내가 태그안에서 쓴 값들이 저장이 되는 곳
        let value = e.target.value; //사용자가 입력한 input태그 안의 값을 얻어옴
        let name = e.target.name; //문자열을 입력한 input태그의 name을 가져옴.
        console.log(name+" : "+value);
        //bbs 키를 받아서 value를 저장
        bbs[name] = value
        setVO(bbs);

        //위의 내용을 한줄로 한다면..?
        // setVO({...vo, [e.target.name]:e.target.value});
    }

    //function saveData(){ 아래와 같은 기능수행
    const saveData = () => {
        console.log(vo);

        axios.post(API_URL, 
            //bname이 변수로 BBS로 선언이 안되어있으므로 VO로 한번에 던지면 안된다.
            // 이럴때는 객체를 하나하나 풀어놔야한다.
            {params: {subject : vo.subject, writer : vo.writer, content : vo.content, bname : "BBS"}}
        ).then((json) => {
            //저장 성공시 서버가 cnt변수에 1을 넣어서 보낸다.
            if(json.data.cnt == 1)
                router.push('/');
        })
        
    }

    return(
        <div className={styles.page}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>제목</TableCell>
                        <TableCell>
                            <input type="text" name="subject" onChange={changeVO}/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>
                            <input type="text" name="writer" onChange={changeVO}/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>내용</TableCell>
                        <TableCell>
                            <textarea name="content" rows={7} cols={50} onChange={changeVO}></textarea>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Button variant="contained" color="primary"
                            onClick={saveData}>
                                글쓰기
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}