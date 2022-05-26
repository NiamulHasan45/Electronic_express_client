
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
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element ={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
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
