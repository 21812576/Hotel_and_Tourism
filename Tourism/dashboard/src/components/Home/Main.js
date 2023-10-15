import React from 'react';
import TopTotal from "./TopTotal";
import LatestBookings from "./LatestBookings";

function Main() {
  return (
    <>
        <section className="content-main">
            <div className="content-header">
                <h2 className="content_title">DASHBOARD</h2>
            </div>
            {/* Top Total */}
            <TopTotal/>

            {/* LATEST BOOKINGS */}
            <div className="card mb-4 shadow-sm">
                <LatestBookings />
            </div>
        </section>
    </>
  )
}

export default Main