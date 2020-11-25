import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" href="#">
                <strong>Vincent Diaz</strong>
            </Link>
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#">
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="portfolio.html">
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="contact.html">
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