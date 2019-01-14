import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Counters: <span>{totalCounters}</span>
            </a>
        </nav>
    );
};

export default NavBar;
