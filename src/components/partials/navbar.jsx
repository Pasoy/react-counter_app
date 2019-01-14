import React, { Component } from 'react';

// Stateless Functional Component

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Counters: <span>{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}

export default NavBar;
