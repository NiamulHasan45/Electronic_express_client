
import './App.css';
import Header from './SharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage/HomePage';
import Footer from './SharedComponents/Footer/Footer';
import PurchaseHome from './Pages/Purchase/PurchaseHome/PurchaseHome';
import Login from './Authentication/Login/Login';
import RequireAuth from './Authentication/RequireAuth';
import SignUp from './Authentication/Register/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/onepart/:id' element={
          <RequireAuth>
            <PurchaseHome></PurchaseHome>
          </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
