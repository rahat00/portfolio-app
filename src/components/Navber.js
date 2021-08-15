import React, { Component } from 'react'
import Logo from '../images/logo.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Link } from 'react-router-dom'

export default class Navber extends Component {

    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    render() {
        return (
            <>
                <nav className="navbar navbers navbar-expand-lg navbar-light bg-secondary">
                    <a><img className="logo" src={Logo}></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio" >Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/service">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {/* <li class="nav-item">
                                <span className="nav-link clock" href="#">{this.state.date.toLocaleTimeString()}</span>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                <div id="navber-end"></div>
            </>
        )

    }
}