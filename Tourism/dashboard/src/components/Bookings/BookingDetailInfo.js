import React from 'react';

function BookingDetailInfo() {
  return (
    <div className='row mb-5order-info-wrap'>
        <div className='col-md-6 col-lg-4'>
            <article className='icontext align-items-start'>
                <span className='icon icon-sm rounded-circle alert-success'>
                    <i className='text-success fas fa-user'></i>
                </span>
                <div className='text'>
                    <h6 className='mb-1'>Customer</h6>
                    <p className='mb-1'>
                        Shan Dilhara <br />
                        <a href={`mailto:user@example.com`}>shandilhara826@gmail.com</a>
                    </p>
                </div>
            </article>
        </div>
        <div className='col-md-6 col-lg-4'>
            <article className='icontext align-items-start'>
                <span className='icon icon-sm rounded-circle alert-success'>
                    <i className='text-success fas fa-briefcase'></i>
                </span>
                <div className='text'>
                    <h6 className='mb-1'>Package Info</h6>
                    <p className='mb-1'>
                        Package Gold <br /> Reviews: 10 / Ratings: 4.3
                    </p>
                </div>
            </article>
        </div>
        <div className='col-md-6 col-lg-4'>
            <article className='icontext align-items-start'>
                <span className='icon icon-sm rounded-circle alert-success'>
                    <i className='text-success fas fa-map-marker-alt'></i>
                </span>
                <div className='text'>
                    <h6 className='mb-1'>Location</h6>
                    <p className='mb-1'>
                        Galle - Sri Lanka
                    </p>
                </div>
            </article>
        </div>
    </div>
  );
};

export default BookingDetailInfo;