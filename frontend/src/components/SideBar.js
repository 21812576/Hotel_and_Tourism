import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className='bg-dark text-light py-5 px-3 h-100' style={{ minHeight: '80vh' }}>
            <b>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/viewrooms" className='btn text-light'>Room Management</Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/viewevents" className='btn text-light'><p>Events Management</p></Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/kitchen" className='btn text-light'><p>Food and Kitchen Management</p></Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/adminviewpackages" className='btn text-light'><p>Tourism Management</p></Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/inventory" className='btn text-light'><p>Inventory Management</p></Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/viewstaff" className='btn text-light'><p>Staff Management</p></Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/viewfinance" className='btn text-light'><p>Finance Management</p></Link>
                    </div>
                </div>
                <div className='col-12 py-1 d-flex justify-content-center'>
                    <div className='col-12 py-1 border border-white rounded'>
                        <Link to="/viewmaintainance" className='btn text-light'><p>HouseKeeping Management</p></Link>
                    </div>
                </div>
                
                
            </b>
        </div>
    )
}
