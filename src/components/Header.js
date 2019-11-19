import React, {Component} from 'react'
import '../styles/Header.css'

class Header extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <header className="header">
                <div className="container">
                    <a href="/" className="logo">
                        Logo
                    </a>
                </div>
            </header>
        )
    }
}

export default Header