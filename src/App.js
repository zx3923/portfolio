import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Port from './Port'

function App() {
  return (

    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/port' element={<Port />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
