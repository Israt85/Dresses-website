import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Pages/Login/Login.jsx';
import DashboardLayout from './Layouts/DashboardLayout.jsx';
import NewDashboard from './Pages/Dashboard/NewDashboard.jsx';
import Sales from './Pages/Sales/Sales.jsx';
import AllProducts from './Pages/Products/AllProducts.jsx';
import Status from './Pages/Products/Status.jsx';
import EditProduct from './Pages/Products/EditProduct.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import EditProfile from './Pages/Profile/EditProfile.jsx';
import Order from './Pages/Order/Order.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route>
    <Route path="/" element={<Login />} />
    <Route path='dashboard' element={<DashboardLayout />}>
    <Route path="newdash" element={<NewDashboard/>} />
    <Route path="sales" element={<Sales/>} /> 
    <Route path="allproducts" element={<AllProducts/>} /> 
    <Route path="status" element={<Status/>} /> 
    <Route path="editproduct" element={<EditProduct/>} /> 
    <Route path="profile" element={<Profile/>} /> 
    <Route path="order" element={<Order/>} /> 
    {/* <Route path="edit" element={<EditProfile/>} />  */}
  </Route>
  </Route>
    </Routes>
</BrowserRouter>
)
