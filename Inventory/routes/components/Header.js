import React from "react";
import './Header.css';


function Header(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">INVENTORY SYSTEM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
          
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="/add">Add Products</a> 
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="/orders">Order List</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="/Oadd">Add Orders</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="/finance">Finance Report</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="/fadd">Add Finance</a>
        </li>



      </ul>
    </div>
  </div>
</nav>
    )


}

export default Header;