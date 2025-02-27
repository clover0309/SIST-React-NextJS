import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Content from './pages/Content';
import { Box, Container, Grid2 } from '@mui/material';

function App() {
  return (

      <Container fixed>

      <Header/>

      <Grid2 container>
        <Grid2 size={2}>
          </Grid2>
        <Grid2 size={10}>
          <Box
          sx={{
            display:'flex',
            justifyContent:'center',
            height:'1200px',
            weight:'1200px',
            backgroundColor: 'lightblue'
          }}
          >
            <Content/>
          </Box>
        </Grid2>
      </Grid2>
        </Container>
  );
}

export default App;
