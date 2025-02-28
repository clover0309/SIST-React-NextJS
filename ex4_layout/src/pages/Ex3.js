import { AccountBox, Send } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import Icon from '@mui/material/Icon';
import React from "react";

export default function Ex3() {
    return(
        /* mui가 제공하는 Stack 태그 */
        <Stack>
            <Stack direction = 'row'>
                <Button variant="text" href="https://google.com">Google</Button>
                <Button variant="contained" href="https://naver.com">Naver</Button>
                <Button variant="outlined" href="https://daum.net">Kakao</Button>
            </Stack>
            <Stack spacing={2} mt={5} direction = 'row' >
                <Button variant="text" color="primary">primary</Button>
                <Button variant="contained" color='success'>success</Button>
                <Button variant="outlined" color='error'>error</Button>
                <Button variant="contained" color='warning'>warning</Button>
                <Button variant="outlined" color='info'>info</Button>
            </Stack>

            <Stack spacing={2} mt={5} direction = 'row' >
                <Button variant="contained" startIcon={<Send/>}>Small</Button>
                <Button variant="contained" endIcon={<AccountBox/>}
                onClick={()=> {
                    alert("계정버튼")
                }}>Medium</Button>
                <IconButton color='error'>
                    <AccountBox onClick={()=>
                    {
                        alert("이것도 버튼임");
                    }}/>
                </IconButton>

            </Stack>
        </Stack>
    );
}