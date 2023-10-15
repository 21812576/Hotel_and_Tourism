import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
        <div className='container my-5'>
            <div className='row justify-content-center align-items-center'>
                <h4 className='text-center mb-2 mb-sm-5'><b>Page Not Found</b></h4>
                <img 
                    style={{width: "100%", height: "300%", objectFit: "contain"}}
                    src='/images/Pngtree.png'
                    alt='Not-found'
                />
                <button className='col-md-3 col-sm-6 col-12 btn btn-success mt-5'>
                    <Link to="/" className='text-white text-decoration-none'>
                        <h5>Home Page</h5>
                    </Link>
                </button>
            </div>
        </div>
    </>
  );
};

export default NotFound;