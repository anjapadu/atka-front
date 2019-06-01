import React, { Component, Fragment } from 'react';
import Logo from '../../img/logo.png';
import Logo2 from '../../img/logo2.png';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href={BASE_URL}>
                        <img src={Logo2} width="40" height="28" />
                    </a>
                    <a className="navbar-item" href={BASE_URL}>
                        <img src={Logo} width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a 
                            className="navbar-item"
                            href={`${BASE_URL}/adoptar`}
                        >
                            Adoptar
                        </a>
                        <a 
                            className="navbar-item"
                            href={`${BASE_URL}/servicios`}
                        >
                            Servicios
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <a
                                className="button is-primary"
                                href={`${BASE_URL}/login`}
                            >
                                <strong>Log in</strong>
                            </a>
                            <a 
                                className="button is-light"
                                href={`${BASE_URL}/registro`}
                            >
                                Sin up
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;