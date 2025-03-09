import { Button, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";


//page.js에서 list와 cp라는 파라미터를 명확히 전달 하고 있으니, 인자값에 list와 cp, tp를 사용하고있음.
export default function BbsList({list, cp, tp}) {
    //글쓰기 버튼에 Router처리를 위한 useRouter
    //import 되는건 next/navigation을 import 해야한다.
    const router = useRouter();
    return(
        
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>글번호</TableCell>
                    <TableCell align="right">제목</TableCell>
                    <TableCell align="right">글쓴이</TableCell>
                    <TableCell align="right">날짜</TableCell>
                    <TableCell align="right">조회수</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.b_idx}
                      </TableCell>
                      <TableCell align="right">{row.subject}</TableCell>
                      <TableCell align="right">{row.writer}</TableCell>
                      <TableCell align="right">{row.write_date}</TableCell>
                      <TableCell align="right">{row.hit}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={4}>
                    {/*  */}
                    <Pagination count={tp} color="primary" onChange={cp}/>
                    </TableCell>
                    <TableCell sx={{textAlign:'right'}}>
                    <Button variant="contained" color="primary" 
                    onClick={() => {
                        //화면 연결을 Router로 처리.
                        router.push("/write");
                    }}>
                        글쓰기
                    </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
    );
}