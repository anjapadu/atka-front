import React, { Component, Fragment } from 'react';
import Logo from '../../img/logo.png';
import Logo2 from '../../img/logo2.png';

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="">
                        <img src={Logo2} width="40" height="28" />
                    </a>
                    <a class="navbar-item" href="">
                        <img src={Logo} width="112" height="28" />
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-primary">
                            <strong>Log in</strong>
                        </a>
                        <a class="button is-light">
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