import logo from './logo.svg';
import './App.css';
import TranslatorForm from './Components/Form/TranslatorForm';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Auth/Login/Login';
import Rigister from './Auth/Rigister/Rigister';
import Details from './Pages/Details/Details';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import { useEffect } from 'react';
import { fetchProducts } from './Store/Slices/ProductsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  return (
   
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/Home' element={<Home/> }  />
      <Route path='/Login' element={<Login/> }  />
      <Route path='/Rigister' element={<Rigister/> }  />
      <Route path='/Details/:id' element={<Details/> }  />
      <Route path='/Products' element={<Products/> }  />
      <Route path='/Cart' element={<Cart/> }  />
      {/* <Route path='/Contacts' element={<Contacts/> }  />
      <Route path='/About' element={<About/> }  /> */}
    </Routes>
  
  );
}

export default App;
