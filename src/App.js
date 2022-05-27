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
import ManageProducts from './Components/ManageProducts/ManageProducts';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:orderId' element={<Payment></Payment>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
          <Route path='ManageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='addAProduct' element={<RequireAdmin><AddAProduct></AddAProduct></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
