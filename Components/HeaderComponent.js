import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Styled from 'styled-components';
const Ul = Styled.ul`
    display: flex;
    justify-content: space-between;

    & a {
        font-size: 24px;
        line-height: 22px;
        color: #000000;
    }

    & a:focus {
        font-weight: bold;
    }
`
export default function HeaderComponents() {
    return (
        <header>
            <nav>
                <Ul>
                    <li>
                        <Link to="/">Feed</Link>
                    </li>
                    <li>
                        <Link to="/addPost">Add a post</Link>
                    </li>
                    <li>
                        <Link to="/options">Username</Link>
                    </li>
                </Ul>
            </nav>
        </header>
    )
}
