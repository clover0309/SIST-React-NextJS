import './App.css';
import './css/menu.css';

/* JSX문법의 주석 
   - 외부파일을 쓸때는 반드시 import해야함!
  */
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let subject = '쌍용교육센터';
  let myFont = { fontSize: '30px', color: '#f00' };
  return (
    <div class Name="App">
      {/*2예제 :<Ex1 />*/}
      {/*1예제 : <div id="header">
        <ul id="nav">
          <li id="apple">&nbsp;</li>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV&amp;Home</li>
          <li>Only on Apple</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      </div>
      <h2 style={myFont}>{subject}</h2>*/}
      
      <nav>
        <Link to="/ex1">메뉴1</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/ex2">메뉴2</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/ex3">메뉴3</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/ex4">메뉴4</Link>
      </nav>

      <Routes>
        <Route path='/ex1' element={<Ex1/>}/>
        <Route path='/ex2' element={<Ex2/>}/>
        <Route path='/ex3' element={<Ex3/>}/>
        <Route path='/ex4' element={<Ex4/>}/>
      </Routes>
    </div>
  );
}

export default App;
/*
  라우터란?
    리엑트에서 라우터는 웹 브라우저에서 URL이 변경될 때마다 해당
    URL페이지를 해석하고 보여주는 일을 의미한다.
    - BrowserRouter : HTML5를 지원하는 브라우저의 주소를 감지한다.
    - HashRouter : 해지 주소(http://test.test.com/#test)를 감지한다.

    라우터 설치 - NextJs에서는 내장이 되어있다.
    npm install react-router-dom@6
*/