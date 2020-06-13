import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.css';

class Navigation extends Component{

    btnLogOut(){
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-id');
        localStorage.removeItem('user-role');
        alert('User logged out successfully.');
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Tourism Expert </span>
                <ul className="navbar-nav my-2 my-lg-0 ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                    </li>
                    <span> </span>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mypackages">
                            My Packages{/*<i className="fa fa-shopping-cart" aria-hidden="true"/>*/}
                        </Link>
                    </li>
                    <span> </span>
                    <Link className="nav-link" to="/" onClick={this.btnLogOut}>
                        SignOut
                    </Link>
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-5">
                    <a href="https://github.com/Thamaltw97/Tourism-App-SLIIT"><h3><span className="fa fa-github"></span></h3></a>
                </form>
            </nav>
        )
    }

}
export default Navigation;