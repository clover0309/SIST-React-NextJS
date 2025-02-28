import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Icon, IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React from "react";

export default function Ex4_Card(){
    return(
        <Stack spacing={2} direction='row'>
            <Box width='300px'>
                <Card>
                    {/* 이미지를 넣기위한 CardMedia component 
                    img src 태그와 유사하다.
                    */}
                    <CardMedia component='img'
                                height='140'
                                image="https://picsum.photos/300"
                                alt="picsum photo"/>
                    <CardContent>
                        {/*글씨를 사용할때 스타일을 적용하는 문자 컴포넌트는 Typography
                        variant를 사용하면 h4 태그를 적용 할 수 있다.
                        component를 사용하면 variant태그의 습성을 지정할 수 있다.
                        */}
                        <Typography variant="h4">
                            Card연습                 
                        </Typography>

                        {/*Typography안에서 css도 같이 지정할 수 있다. */}
                        <Typography variant="p" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                        
                        {/* 공유버튼 및 더보기 버튼은 CardActions에서 만들 수 있다. */}
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>

            <Card sx={{maxWidth: 345 }}>
                {/*CardHeader안에 아바타를 두었다. */}
                <CardHeader avatar={<Avatar sx={{bgcolor:red[500] }}>R</Avatar>}
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                        </IconButton>}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"/>

                    <CardMedia component='img'
                                height='140'
                                image="https://picsum.photos/300"
                                alt="picsum photo"/>

                <CardContent>
                    <Typography variant="h4" component='div'>
                        Card Test
                    </Typography>

                    <Typography variant="p" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. 
                    Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton>
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton>
                        <ShareIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </CardActions>
            </Card>

        </Stack>
    );
}