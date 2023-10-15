import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import packages from '../data/Packages';
import EditPackageMain from "./../components/Packages/EditPackageMain";

const PackageEditScrren = ({match}) => {
    const packageId = packages.find((p) => p._id === match.params.id);

    return (
        <>
            <Sidebar/>
            <main className='main-wrap'>
                <Header/>
                <EditPackageMain packageId={packageId} />
            </main>
        </>
    );
};

export default PackageEditScrren;