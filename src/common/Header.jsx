import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
         <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
        <img src='https://images.indianexpress.com/2021/01/myntra.png' />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/men">MEN</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">WOMEN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">KIDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOMR&LIVIMG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">BEUTY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">STUDIO</a>
        </li>
        <li class="nav-item">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </li> 
      </ul>
      <div className='d-flex'>
            <div className="icon">
                <CiUser/>
                <h6>Profile</h6>
            </div>
            <div className="icon">
                <CiHeart/>
                <h6>Wishlist</h6>
            </div>
            <div className="icon">
                <IoBagOutline/>
                <h6>Bag</h6>
            </div>
      </div>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Header