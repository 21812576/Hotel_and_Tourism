import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import PrivateRoute from "./components/routes/privateRoute";
import AdminCategory from "./pages/admin/category";
import UserBooking from "./pages/user/Booking";
import UserProfile from "./pages/user/Profile";
import AdminRoom from "./pages/admin/Room";
import AdminRooms from "./pages/admin/Rooms";
import AdminRoomUpdate from "./pages/admin/RoomUpdate";
import AdminRoute from "./components/routes/AdminRoute"


const PageNotFound =() =>{

   return <div className="d-flex justify-content-center align-items-center vh-100">404 | page not found</div>;
}

export default  function App() {
  return (
      
     <BrowserRouter>
     <Menu/>
     <Toaster/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>}/>
        <Route path="user/profile" element={<UserProfile/>}/>
        <Route path="user/booking" element={<UserBooking/>}/>
        </Route>

         <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/category" element={<AdminCategory/>}/>
        <Route path="admin/room" element={<AdminRoom/>}/>
        <Route path ="admin/rooms" element={<AdminRooms/>}/>
        <Route path ="admin/room/update/:slug" element={<AdminRoomUpdate/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}replace/>
        </Routes>
     </BrowserRouter>

    
  );
}


