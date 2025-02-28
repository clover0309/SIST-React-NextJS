import logo from './logo.svg';
import './App.css';
import { Container, Grid2 } from '@mui/material';
import Left from './pages/Left';
import Content from './pages/Content';
import { Link, Route, Routes } from 'react-router-dom';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4_Card from './pages/Ex4_Card';

function App() {
  return (
    <div className="App">
      <nav>
      <Link to = "/ex1">화면1</Link> &nbsp;&nbsp;&nbsp;
      <Link to = "/ex2">화면2</Link> &nbsp;&nbsp;&nbsp;
      <Link to = "/ex3">화면3</Link> &nbsp;&nbsp;&nbsp;
      <Link to = "/ex4">화면4</Link>   
      </nav> 

      <Routes>
        <Route path="/ex1" element={<Ex1/>}/>
        <Route path="/ex2" element={<Ex2/>}/>
        <Route path="/ex3" element={<Ex3/>}/>
        <Route path="/ex4" element={<Ex4_Card/>}/>
      </Routes>
    </div>
  );
}

export default App;
