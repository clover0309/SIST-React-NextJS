import { Grid, Grid2 } from "@mui/material";

export default function Nav(){
    const nav_item = [
        //json 객체형태로 만든다.
        {title:"Home", path:"/"},
        {title:"Service", path:"/service"},
        {title:"Color", path:"/color"},
        {title:"Skin", path:"/skin"},
        {title:"About", path:"/about"}
    ];

    return(
        <nav id="header">
            <Grid2 container my={2}>
                {nav_item.map(
                    (item) => (
                        <Grid2 item key={item.title} size={[12,6,2]}
                        bgcolor='primary.light' p={2}>
                                {item.title}
                        </Grid2>
                    ))}
            </Grid2>
        </nav>
    );
}