import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' >
                        <img src='./pokemon.png' alt='' width='100' />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default navbar