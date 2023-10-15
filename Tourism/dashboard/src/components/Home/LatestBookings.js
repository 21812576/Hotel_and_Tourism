import React from 'react';
import { Link } from 'react-router-dom';

function LatestBookings() {
  return (
    <div className='card-body'>
        <h5 className='card-title'>LATEST BOOKINGS</h5><br/>
        <div className='table-responsive'>
            <table className='table'>
                <tbody>
                    <tr>
                        <td><b>NAME</b></td>
                        <td><b>EMAIL ID.</b></td>
                        <td><b>MOBILE NO.</b></td>
                        <td><b>FROM/TO</b></td>
                        <td><b>TIME</b></td>
                        <td><b>ACTION</b></td>
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
                        <td className='d-flex justify-content-end align-item-center'>
                            <Link to={`/bookings`} className='text-success'>
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
                        <td className='d-flex justify-content-end align-item-center'>
                            <Link to={`/bookings`} className='text-success'>
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
                        <td className='d-flex justify-content-end align-item-center'>
                            <Link to={`/bookings`} className='text-success'>
                                <i className='fas fa-eye'></i>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LatestBookings