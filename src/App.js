import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-bootstrap';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddItem from './components/AddItem/AddItem';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UpdateItem from './components/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/deleteitem/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/update/:id' element={<UpdateItem></UpdateItem>}></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
