import React from 'react';
import {Link} from "react-router-dom";
import Package from "./Package";
import packages from "./../../data/Packages";

function MainPackages() {
  return (
    <section className='content-main'>
        <div className='content-header'>
            <h2 className='content_title'>PACKAGES</h2>
            <div>
                <Link to="/AddPackage" className='btn btn-primary'>
                    CREATE NEW PACKAGE
                </Link>
            </div>
        </div>

        <div className='card mb-4 shadow-sm'>
            <header className='card-header bg-white'>
                <div className='row gx-3 py-3'>
                    <div className='col-lg-4 col-md-6 me-auto'>
                        <input 
                            type='search'
                            placeholder='Search...'
                            className='form-control p-2'
                        />
                    </div>
                    <div className='col-lg-2 col-6 col-md-3'>
                        <select className='form-select'>
                            <option>Select Destination</option>
                            <option>Kandy</option>
                            <option>Anuradapura</option>
                            <option>Jaffna</option>
                        </select>
                    </div>
                    <div className='col-lg-2 col-6 col-md-3'>
                        <select className='form-select'>
                            <option>Tour Duration</option>
                            <option>3 days</option>
                            <option>4 days</option>
                            <option>5 days</option>
                        </select>
                    </div>
                </div>
            </header>

            <div className='card-body'>
                <div className='row'>
                    {/* Products */}
                    {packages.map((pckage) => (
                        <Package pckage={pckage} key={pckage._id} />
                    ))}
                </div>

                <nav className='float-end mt-4' aria-label='Page navigation'>
                    <ul className='pagination'>
                        <li className='page-item disabled'>
                            <Link className='page-link' to="#">
                                Previous
                            </Link>
                        </li>
                        <li className='page-item active'>
                            <Link className='page-link' to="#">
                                1
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link className='page-link' to="#">
                                2
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link className='page-link' to="#">
                                3
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link className='page-link' to="#">
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}

export default MainPackages