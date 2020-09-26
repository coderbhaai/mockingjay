import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             user:              []
        }
    }

    componentDidMount(){
        if(typeof(Storage) !== "undefined"){ this.setState({ user: JSON.parse(localStorage.getItem('user')) || [] }) }
    }

    render() {
        return (
            <nav className="navbar sticky-top">
                <a className="navbar-brand" href="/"><img src="/static/images/logo.svg"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">SEO</a>
                                <a className="dropdown-item" href="#">Social Scheduler</a>
                                <a className="dropdown-item" href="#">Website Analysis</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/static/images/icons/user.svg" className="user"/><span className="caret"></span></a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/register">Register</a>
                                <a className="dropdown-item" href="/login">Login</a>
                                <a className="dropdown-item" href="#">Log Out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
