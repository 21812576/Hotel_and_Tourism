import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddPackageMain from "./../components/Packages/AddPackageMain";

function AddPackage() {
  return (
    <>
        <Sidebar />
        <main className='main-wrap'>
            <Header />
            <AddPackageMain />
        </main>
    </>
  );
};

export default AddPackage;