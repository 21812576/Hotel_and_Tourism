import React from 'react';
import BookingDetailPackages from "./BookingDetailPackages";
import BookingDetailInfo from "./BookingDetailInfo";
import { Link } from 'react-router-dom';

function BookingDetailMain() {
  return (
    <section className='content-main'>
        <div className='content-header'>
            <Link to="/bookings" className='btn btn-dark text-white'>
                BACK TO BOOKINGS
            </Link>
        </div>

        <div className='card'>
            <header className='card-header p-3 Header-green'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                        <span>
                            <i className='fas fa-calendar-alt'></i>
                            <b className='text-white'> Dec 12 2023</b>
                        </span>
                        <br />
                        <small className='text-white mx-3'>
                            Booking ID : BK_1236
                        </small>
                    </div>
                    <div className='col-lg-6 col-md-6 ms-auto d-flex justify-content-end'>
                        <select
                            className='form-select d-inline-block'
                            style={{maxWidth: "200px"}}
                        >
                            <option>Change status</option>
                            <option>Pending</option>
                            <option>Confirmed</option>
                            <option>Cancelled</option>
                        </select>
                        <Link className='btn btn-success ms-2' to="#">
                            <i className='fas fa-print'></i>
                        </Link>
                    </div>
                </div>
            </header>
            <div className='card-body'>
                {/* Booking Info */}
                <BookingDetailInfo />

                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='table-responsive'>
                            <BookingDetailPackages />
                        </div>
                    </div>
                    {/* Booking Status */}
                    <div className='col-lg-3'>
                        <div className='box shadow-sm bg-light'>
                            <button className='btn btn-dark col-12'>
                                MARK AS CONFIRMED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BookingDetailMain;