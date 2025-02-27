import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import Ex5 from './pages/Ex5';
import Ex6 from './pages/Ex6';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/page1">화면1</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/page2">화면2</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/page3">화면3</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/page4">화면4</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/page5">화면5</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/page6">화면6</Link> &nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path='/page1' element={<Ex1/>}/>
        <Route path='/page2' element={<Ex2/>}/>
        <Route path='/page3' element={<Ex3/>}/>
        <Route path='/page4' element={<Ex4/>}/>
        {/* ex5가 생성될때, year와 str이 생성되면서 들어온다. */}
        <Route path='/page5' element={<Ex5 year={2025} str="쌍용교육센터"/>}/>
        <Route path='/page6' element={<Ex6/>}/>
      </Routes>
    </div>
  );
}

export default App;
