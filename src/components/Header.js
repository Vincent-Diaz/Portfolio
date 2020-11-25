import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" href="/">
                <strong>Vincent Diaz</strong>
            </Link>
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
export default NavBar