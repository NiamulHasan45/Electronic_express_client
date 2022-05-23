import logo from './logo.svg';
import './App.css';
import Header from './SharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage/HomePage';
import Footer from './SharedComponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
