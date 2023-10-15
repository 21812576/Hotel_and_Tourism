import React from 'react';
import { Link } from 'react-router-dom';

function Bookings() {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th scope='col'>NAME</th>
                <th scope='col'>EMAIL ID.</th>
                <th scope='col'>MOBILE NO.</th>
                <th scope='col'>FROM / TO</th>
                <th scope='col'>TIME</th>
                <th>STATUS</th>
                <th scope='col' className='text-end'>ACTION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Shan Dilhara</td>
                <td>shandilhara826@gmail.com</td>
                <td>077-3162536</td>
                <td>2023/07/07 TO 2023/07/10</td>
                <td>
                    <span className='badge rounded-pill alert-success'>
                        Booked at Today at 10:13 AM
                    </span>
                </td>
                <td>
                    <span className='badge btn-success'>Confirmed</span></td>
                <td className='d-flex justify-content-end align-item-center'>
                    <Link to={`/bookingDetails`} className='text-success'>
                        <i className='fas fa-eye'></i>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>Shan Dilhara</td>
                <td>shandilhara826@gmail.com</td>
                <td>077-3162536</td>
                <td>2023/07/07 TO 2023/07/10</td>
                <td>
                    <span className='badge rounded-pill alert-success'>
                        Booked at Today at 10:13 AM
                    </span>
                </td>
                <td>
                    <span className='badge btn-dark'>Pending</span></td>
                <td className='d-flex justify-content-end align-item-center'>
                    <Link to={`/bookingDetails`} className='text-success'>
                        <i className='fas fa-eye'></i>
                    </Link>
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default Bookings;