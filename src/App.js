import MainPage from './pages/mainPage';
import Pedidos from './components/main/contents/Pedidos';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path='/' element ={<MainPage/>} />
        <Route path='/pedidos' element={<Pedidos/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
