import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Purchase from './Components/Purchase/Purchase';
import SignUp from './Components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/MyOrder/MyOrder';
import Reviews from './Components/Reviews/Reviews';
import MyProfile from './Components/MyProfile/MyProfile';
import Payment from './Components/Payment/Payment';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddAProduct from './Components/AddAProduct/AddAProduct';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageProduct from './Components/ManageProduct/ManageProduct';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:productId' element={<Purchase></Purchase>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:orderId' element={<Payment></Payment>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='ManageAllProduct' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addAProduct' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
