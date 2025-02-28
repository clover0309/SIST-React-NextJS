import { Box, Button } from "@mui/material";
import React from "react";

const styles = {
    backgroundColor: "lightblue",
    width: "100%",
    height: "100vh", // View Height의 약자 부모태그와 상관없이 무조건 꽉채운다.
    margin: 0,
    padding: 0,
    paddingTop: "20px"
};

export default function Content() {

    const navItems = ['HOME', 'About', 'Product', 'Board'];

    return(
        <div style={styles}>
            {/* sx는 스타일을 주는 옵션이다. 
            xs는 엄청 작은사이즈, 디스플레이를 지정하지 않는다.
            sm은 작은 사이즈, 디스플레이는 block
            */}
            <Box sx={{display: {xs:'none', sm:'block'}}}>
                {/*메뉴라는 변수에 담아 */}
                { navItems.map((menu)=>(
                    <Button sx={{color:'#000', fontSize:'15px', fontWeight:'bold'}}>
                        {/*map형태를 사용할때는 항상 key값이 필요함.
                            key값이 없는경우에는 오류가 나는 경우가 간혹있음.*/}
                        {menu}
                    </Button>
                ))}
            </Box>
        </div>
    );
}