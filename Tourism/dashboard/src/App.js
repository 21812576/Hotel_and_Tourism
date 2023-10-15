import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AddPackage from "./screen/AddPackage";
import PackageScreen from "./screen/PackageScreen";
import BookingScreen from "./screen/BookingScreen";
import BookingDetailScreen from "./screen/BookingDetailScreen";
import LoginScreen from "./screen/LoginScreen";
import UserScreen from "./screen/UsersScreen";
import PackageEditScrren from "./screen/PackageEditScrren";
import NotFound from "./screen/NotFound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/packages" element={<PackageScreen/>} />
          <Route path="/bookings" element={<BookingScreen/>} />
          <Route path="/bookingDetails" element={<BookingDetailScreen/>} />
          <Route path="/addpackage" element={<AddPackage/>} />
          <Route path="/users" element={<UserScreen/>} />
          <Route path="/package/:id/edit" element={<PackageEditScrren/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="*" element={<NotFound/>} />
          
          </Routes>
      </BrowserRouter>
  );
}

export default App;
