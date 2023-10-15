import React from 'react';
import Toast from "./../LoadingError/Toast";
import { Link } from 'react-router-dom';

function EditPackageMain(props) {
    const {packageId} = props;
    
  return (
    <>
        <section className='content-main' style={{maxWidth: "1200px"}}>
            <form>
                <div className='content-header'>
                    <Link to="/packages" className='btn btn-danger text-white'>
                        GO TO PACKAGES
                    </Link>
                    <h2 className='content-title'>Update Package</h2>
                    <div>
                        <button type='submit' className='btn btn-primary'>
                            PUBLISH NOW
                        </button>
                    </div>
                </div>


                <div className='row mb-4'>
                    <div className='col-xl-8 col-lg-8'>
                        <div className='card mb-4 shadow-sm'>
                            <div className='card-body'>
                                <div className='mb-4'>
                                    <label htmlFor='product_title' className='form-label'>
                                        Package Title
                                    </label>
                                    <input 
                                        type='text'
                                        placeholder='Type here'
                                        className='form-control'
                                        id='product_title'
                                        required
                                        value={packageId.name}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='product_location' className='form-label'>
                                        Location
                                    </label>
                                    <input 
                                        type='text'
                                        placeholder='Type here'
                                        className='form-control'
                                        id='product_location'
                                        required
                                        value={packageId.location}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='product_price' className='form-label'>
                                        Price
                                    </label>
                                    <input 
                                        type='number'
                                        placeholder='Type here'
                                        className='form-control'
                                        id='product_price'
                                        required
                                        value={packageId.price}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='form-label'>
                                        Features
                                    </label>
                                    <textarea
                                        placeholder='Type here'
                                        className='form-control'
                                        rows="7"
                                        required
                                        value={packageId.features}
                                    ></textarea>
                                </div>
                                <div className='mb-4'>
                                    <label className='form-label'>
                                        Description
                                    </label>
                                    <textarea
                                        placeholder='Type here'
                                        className='form-control'
                                        rows="7"
                                        required
                                        value={packageId.description}
                                    ></textarea>
                                </div>
                                <div className='mb-4'>
                                    <label className='form-label'>Images</label>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        placeholder='Inter Image URL'
                                        value={packageId.image}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </>
  );
};

export default EditPackageMain;