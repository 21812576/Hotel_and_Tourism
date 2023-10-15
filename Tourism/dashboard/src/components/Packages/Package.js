import React from 'react';
import { Link } from 'react-router-dom';

function Package(props) {
    const {pckage} = props;

  return (
    <>
        <div className='col-md-6 col-sm-6 col-lg-3 mb-5'>
            <div className='card card-product-grid shadow-sm' >
                <Link to="#" className='img-wrap'>
                    <img src={pckage.image} style={{ width: '200px', height: '300px' }} alt="Package" />
                </Link>
                <div className='info-wrap'>
                    <Link to="#" className='title text-truncate'>
                        {pckage.name}
                    </Link>
                    <div className='price mb-2'>Rs.{pckage.price}</div>
                    <div className='row'>
                        <Link
                            to={`/package/${pckage._id}/edit`}
                            className='btn btn-sm btn-outline-success p-2 pb-3 col-md-6'
                        >
                            <i className='fas fa-pen'></i>
                        </Link>
                        <Link
                            to="#"
                            className='btn btn-sm btn-outline-danger p-2 pb-3 col-md-6'
                        >
                            <i className='fas fa-trash-alt'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Package