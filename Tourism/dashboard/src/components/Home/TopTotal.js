import React from 'react'

function TopTotal() {
  return (
    <div className="row">
        <div className="col-lg-4">
            <div className="card card-body mb-4 shadow-sm">
                <article className="icontext">
                    <span className="icon icon-sm rounded-circle alert-primary">
                        <i className="text-primary fas fa-users"></i>
                    </span>
                    <div className="text">
                        <h6 className='mb-1'>Users</h6> <span>10</span>
                    </div>
                </article>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card card-body mb-4 shadow-sm">
                <article className="icontext">
                    <span className="icon icon-sm rounded-circle alert-success">
                        <i className="text-success fas fa-bags-shopping"></i>
                    </span>
                    <div className="text">
                        <h6 className='mb-1'>Total Packages</h6> <span>10</span>
                    </div>
                </article>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card card-body mb-4 shadow-sm">
                <article className="icontext">
                    <span className="icon icon-sm rounded-circle alert-success">
                        <i className="text-success fas fa-newspaper"></i>
                    </span>
                    <div className="text">
                        <h6 className='mb-1'>Bookings</h6> <span>10</span>
                    </div>
                </article>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card card-body mb-4 shadow-sm">
                <article className="icontext">
                    <span className="icon icon-sm rounded-circle alert-warning">
                        <i className="text-warning fab fa-rocketchat"></i>
                    </span>
                    <div className="text">
                        <h6 className='mb-1'>Issues Raised</h6> <span>10</span>
                    </div>
                </article>
            </div>
        </div>
    </div>
  )
}

export default TopTotal