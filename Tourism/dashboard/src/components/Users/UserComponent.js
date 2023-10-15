import React from 'react';
import { Link } from 'react-router-dom';

function UserComponent() {
  return (
    <section className='content-main'>
        <div className='content-header'>
            <h2 className='content-title'>USERS</h2>
            <div>
                <Link to="#" className='btn btn-primary'>
                    <i className='material-icons md-plus'></i>CREATE NEW
                </Link>
            </div>
        </div>

        <div className='card mb-4'>
            <header className='card-header'>
                <div className='row gx-3'>
                    <div className='col-lg-4 col-md-6 me-auto'>
                        <input 
                            type='text'
                            placeholder='Search...'
                            className='form-control'
                        />
                    </div>
                    <div className='col-lg-2 col-6 col-md-3'>
                        <select className='form-select'>
                            <option>Show 20</option>
                            <option>Show 30</option>
                            <option>Show 40</option>
                            <option>Show all</option>
                        </select>
                    </div>
                    <div className='col-lg-2 col-6 col-md-3'>
                        <select className='form-select'>
                            <option>Status: all</option>
                            <option>Active only</option>
                            <option>Disabled</option>
                        </select>
                    </div>
                </div>
            </header>

            {/* Card */}
            <div className='card-body'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4'>
                    <div className='col'>
                        <div className='card card-user shadow-sm'>
                            <div className='card-header'>
                                <img 
                                    className='img-md img-avatar'
                                    src="images/profile.png"
                                    alt='User Pic'
                                />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title mt-5'>User_01</h5>
                                <div className='card-text text-muted'>
                                    <p className='m-0'>Shan Dilhara</p>
                                    <p>
                                        <a href={`mailto:user@example.com`}>shandilhara826@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='card card-user shadow-sm'>
                            <div className='card-header'>
                                <img 
                                    className='img-md img-avatar'
                                    src="images/profile.png"
                                    alt='User Pic'
                                />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title mt-5'>User_02</h5>
                                <div className='card-text text-muted'>
                                    <p className='m-0'>Nadeesha</p>
                                    <p>
                                        <a href={`mailto:user@example.com`}>nirawee96@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* nav */}
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
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  );
};

export default UserComponent;