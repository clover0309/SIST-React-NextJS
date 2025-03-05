'use client';
import { Box, Grid2 } from "@mui/material";
import { useState } from "react";

export default function Nav(){
    const nav_item = ['Products', 'Color Cosmetics', 'Skin Cosmetics', 'About'];
    //변수를 만들고, 변수의 값을 setAnchorEl을 통해서 바꿀 수 있다.
    const [anchorEl, setAnchorEl] = useState(null);
    return(
        <nav id="header">
            {/*my= marginY */}
            <Grid2 container my={2}>
                {nav_item.map( (item, i) => (
                        <Grid2 item key={i} size={{xs:12, lg:3}}>
                            {/*map을 통해 Box를 생성하고, 안의 요소를 item을 가져와서 표현한다.*/}
                            <Box bgcolor='primary.light' p={2}>
                                {item}
                            </Box>
                        </Grid2>
                ))}
            </Grid2>
        </nav>
    );
}