
import './App.css';
import Header from './SharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage/HomePage';
import Footer from './SharedComponents/Footer/Footer';
import PurchaseHome from './Pages/Purchase/PurchaseHome/PurchaseHome';
import Login from './Authentication/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/onepart/:id' element={<PurchaseHome></PurchaseHome>}></Route>
        <Route path='/onepart/:id' element={<PurchaseHome></PurchaseHome>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
