import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainPackages from "../components/Packages/MainPackages";

function PackageScreen() {
    return (
        <>
            <Sidebar/>
            <main className="main-wrap">
                <Header/>
                <MainPackages/>
            </main>
        </>
    );
}

export default PackageScreen