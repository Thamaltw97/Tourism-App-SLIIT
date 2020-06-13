import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.css';

class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem('user-name')
        };

    }

    btnLogOut(){
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-id');
        localStorage.removeItem('user-role');
        localStorage.removeItem('user-name');
        alert('User logged out successfully.');
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Tourism Expert </span>
                <ul className="navbar-nav my-2 my-lg-0 ml-auto">
                    <span className="badge badge-pill badge-light mb-3" style={{ marginTop: '12px', marginRight: '15px' }}>
                        <span style={{ color: '#000', textAlign: 'center'}}>{this.state.name}</span>
                    </span>
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