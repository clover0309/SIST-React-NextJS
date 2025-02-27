import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Nav from './pages/Nav';
import Content from './pages/Content';
import { Container, Grid2 } from '@mui/material';

function App() {
  return (

      <Container fixed>
      <Header/>
      <Grid2 container>
        <Grid2 size={3}>
        <Nav/>
          </Grid2>
        <Grid2 size={9}>
          <Content/>
        </Grid2>
      </Grid2>
        </Container>
    /*
      Grid와 Container 안의 레이아웃을 핸들링해주고 반응형으로 배치시켜야 하는 경우
      매우 유용하다.
      fixed는 해당 사이즈보다 브라우저 크기가 작아지면
      xl -> lg -> md -> sm -> xs 순으로 줄어든다.
    */
  );
}

export default App;
