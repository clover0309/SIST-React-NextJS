import React from "react";
import { Box, Container, Grid2 } from "@mui/material";

export default function Ex2() {
    return(
        <Grid2 container mt={5}>
            <Grid2 item size={[12,false,6,false,2]}>
                <Box bgcolor='primary.light' p={2}>
                    Menu1
                </Box>
            </Grid2>
            <Grid2 item size={[12,false,6,false,2]}>
                <Box bgcolor='primary.light' p={2}>
                    Menu2
                </Box>
            </Grid2>
            <Grid2 item size={[12,false,6,false,2]}>
                <Box bgcolor='primary.light' p={2}>
                    Menu3
                </Box>
            </Grid2>
            <Grid2 item size={[12,false,6,false,2]}>
                <Box bgcolor='primary.light' p={2}>
                    Menu4
                </Box>
            </Grid2>
            <Grid2 item size={[12,false,6,false,2]}>
                <Box bgcolor='primary.light' p={2}>
                    Menu5
                </Box>
            </Grid2>
        </Grid2>
    );
}