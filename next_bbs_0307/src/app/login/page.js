import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";

export default function Login(){
    return(
        <div style={{width: '90%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction='column' spacing={1} alignItems='center'>
                    <Avatar sx={{bgcolor: green[500], marginBottom: '20px'}} src=""/>
                    <TextField label='ID' name="mid" autoComplete="user ID"/>
                    <TextField type='password' label='PW' name="mpw" autoComplete="user PW"/>
                    <Button variant="contained">Login</Button>

                </Stack>
            </FormControl>
        </div>
    );
}