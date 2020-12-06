import React, { Component } from 'react'
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isMenuOpen: false
        }
        this.toggleMenu = this.toggleMenu(bind)
    }

    toggleMenu() {
        this.setState = {
            isMenuOpen: !this.state.isMenuOpen
        }
    }

    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className="container">
                        <img className="logo"
                            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
                        />
                    </div>
                    <nav className="nav-bar">
                        <p className="nav-item">SERVICES</p>
                        <p className="nav-item">PORTFOLIO</p>
                        <p className="nav-item">ABOUT</p>
                        <p className="nav-item">TEAM</p>
                        <p className="nav-item">CONTACT</p>
                    </nav>
                    <button className="button-things-nav" onClick={toggleMenu}
                        className="button-things-nav"> Menu
        <img
                            className="image"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                        />
                    </button>
                    <nav className={`mobile-nav ${this.state.isMenuOpen ? null : 'mobile-nav-hide'}`}>
                        <p className="mobile-nav-item">SERVICES</p>
                        <p className="mobile-nav-item">PORTFOLIO</p>
                        <p className="mobile-nav-item">ABOUT</p>
                        <p className="mobile-nav-item">TEAM</p>
                        <p className="mobile-nav-item">CONTACT</p>
                    </nav>

                </header>
                <div className="welcome">
                    <h2 className="welcome-style wordy-things">Welcome To Our Studio!</h2>
                    <h1 className="welcome-style word-things">IT'S NICE TO MEET YOU</h1>
                    <button className="welcome-style button-things">TELL ME MORE</button>
                </div>
            </div>
        );
    }
}
export default App;
