import React from "react";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import Sidebar from "../components/Sidebar";

function HomeScreen() {
    return (
        <>
            <Sidebar/>
            <main className="main-wrap">
                <Header/>
                <Main/>
            </main>
        </>
    );
};
  
export default HomeScreen;