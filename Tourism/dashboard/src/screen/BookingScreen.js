import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BookingMain from "../components/Bookings/BookingMain";

function BookingScreen() {
  return (
    <>
        <Sidebar />
        <main className='main-wrap'>
            <Header />
            <BookingMain />
        </main>
    </>
  )
}

export default BookingScreen