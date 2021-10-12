
import { Link } from 'react-router-dom'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav">

                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to="" className="nav-link" href="#">View</Link>
                            <Link to="" className="nav-link" href="#">login/logout</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </Router>
    )
}

export default Navbar