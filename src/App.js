
import './App.css';
import Nav from './components/Nav';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Privatecomponent from './components/Private';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import ProductList from './components/Productlist';
import Updateproduct from './components/Updateproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Privatecomponent/>}>
          <Route path='/' element={<ProductList/>} />
          <Route path='/add' element={<Addproduct/>} />
          <Route path='/update/:id' element={<Updateproduct/>} />
          <Route path='/logout' element={<h1>Logout Component</h1>} />
          <Route path='/profile' element={<h1>profile Component</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
