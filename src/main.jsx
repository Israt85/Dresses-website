import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Pages/Login/Login.jsx';
import DashboardLayout from './Layouts/DashboardLayout.jsx';
import NewDashboard from './Pages/Dashboard/NewDashboard.jsx';
import Sales from './Pages/Sales/Sales.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route>
    <Route path="/" element={<Login />} />
    {/* <Route path="register" element={<Register />} /> */}
    <Route path='dashboard' element={<DashboardLayout />}>
    <Route path="newdash" element={<NewDashboard/>} />
    <Route path="sales" element={<Sales/>} /> 
  </Route>
  </Route>
    </Routes>
</BrowserRouter>
)
