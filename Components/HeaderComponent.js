import React from 'react';
import {Link} from 'react-router-dom'

export default function HeaderComponents() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Feed</Link>
                    </li>
                    <li>
                        <Link to="/addPost">Add a post</Link>
                    </li>
                    <li>
                        <Link to="/options">Username</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
