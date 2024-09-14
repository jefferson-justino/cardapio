import MainPage from './pages/mainPage';
import Sacola from './pages/sacola';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path='/' element ={<MainPage/>} />
        <Route path='/sacola' element ={<Sacola/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
