import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {
    BrowserRouter as Routes, Switch ,Route, Link 
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { CartContext } from './redux/reducer/handleCart';
function Header() {
    const {cart} = useContext(CartContext)
    let total = 0
    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
        <div  className="container">
            <Link  className="navbar-brand font-weight-bold" to={{ pathname: "/"}}>Shop</Link>
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
            </button>
            <div  className="collapse navbar-collapse " id="main-navbar">
            <ul  className="navbar-nav mx-auto">
                <li  className="nav-item active">
                <Link  className="nav-link" to={{ pathname: "/"}}>Home</Link>
                </li>
               
                <li  className="nav-item active">
                <Link  className="nav-link" to={{ pathname: "/shop"}}>Shop</Link>
                </li>
              
                
            </ul>
            </div>
        
            <ul  className="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
           
            <li  className="dropdown cart-nav dropdown-slide list-inline-item">
                <div className="buttons">
                <a href='#' className="btn btn-outline-dark dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
                   Cart ({cart.length})
                </a>
                </div>
               
                <div  className="dropdown-menu cart-dropdown">
               
               {cart.map((product) => {
                let subtotal = product.qty * product.price;
                total += subtotal;
                return(
                        <div  className="media" key={product.id}>
                            <a href="/product-single">
                            <img  className="media-object img- mr-3" src= {product.image} alt="image" />
                            </a>
                            <div  className="media-body">
                                <h6>{product.title}</h6>
                                <div  className="cart-price">
                                    <span>{product.qty} x</span>
                                    <span>${product.price}</span>
                                    <span>= ${subtotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                )
               })}
               
              
               
             
                <div  className="cart-summary">
                    <span  className="h6">Total</span>
                    <span  className="total-price h6">${total.toFixed(2)}</span>
                    <div  className="text-center cart-buttons mt-3">
                    <Link to={{ pathname: "/cart"}}  className="btn btn-small btn-transparent btn-block">View Cart</Link>
                    </div>
                </div>
                </div>
            </li>
            </ul>
        </div>
        </nav>
    );
}
export default Header;