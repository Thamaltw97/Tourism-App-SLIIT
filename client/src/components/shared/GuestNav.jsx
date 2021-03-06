import React, {Component} from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

class Navigation extends Component{

    render() {
        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Tourism Expert </span>
                <ul className="navbar-nav my-2 my-lg-0 ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">
                            SignUp
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            SignIn
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-5">
                    <a href="https://github.com/Thamaltw97/Tourism-App-SLIIT"><h3><span className="fa fa-github"></span></h3></a>
                </form>
            </nav>


        );
    }

}

export default Navigation;
