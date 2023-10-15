import React from 'react';
import { Link } from 'react-router-dom';

function BookingDetailPackages() {
  return (
    <table className='table border table-lg'>
        <thead>
            <tr>
                <th style={{width: "40%"}}>Package</th>
                <th style={{width: "20%"}}>Price Per-person</th>
                <th style={{width: "20%"}}>No. of Persons</th>
                <th style={{width: "20%"}} className='text-end'>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <Link className='itemside' to="#">
                        <div className='left'>
                            <img 
                                src="/images/gallery.png"
                                alt='package'
                                style={{width: "40px", height: "40px"}}
                                className='img-xs'
                            />
                        </div>
                        <div className='info'>
                            Package 01 - Galle{" "}
                        </div>
                    </Link>
                </td>
                <td>Rs.5000</td>
                <td>5</td>
                <td className='text-end'>Rs.25000</td>
            </tr>

            <tr>
                <td colSpan="4">
                    <article className='float-end'>
                        <dl className='dlist'>
                            <dt>Sub Total : </dt> 
                            <dd>Rs.25000</dd>
                        </dl>
                        <dl className='dlist'>
                            <dt>Service Charge : </dt> 
                            <dd>Rs.1500</dd>
                        </dl>
                        <dl className='dlist'>
                            <dt>Grand Total : </dt> 
                            <dd><b className='h5'>Rs.26500</b></dd>
                        </dl>
                        <dl className='dlist'>
                            <dt className='text-muted'>Status : </dt>
                            <dd>
                                <span className='badge rounded-pill alert-success text-success'>
                                    Booking Confirmed
                                </span>
                            </dd>
                        </dl>
                    </article>
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default BookingDetailPackages;