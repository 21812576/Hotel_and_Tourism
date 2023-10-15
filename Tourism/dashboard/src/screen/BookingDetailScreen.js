import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BookingDetailMain from "../components/Bookings/BookingDetailMain";

function BookingDetailScreen() {
  return (
    <>
        <Sidebar />
        <main className='main-wrap'>
            <Header />
            <BookingDetailMain />
        </main>
    </>
  );
};

export default BookingDetailScreen;