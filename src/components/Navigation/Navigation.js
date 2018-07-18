import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../../hoc/Div';


const navigation = () => {
    return(
        <Div>
            <nav className="nav-header">
                <ul>
                    <li><Link to="/grocery-store">Grocery store</Link></li>
                    <li><Link to="/tech-blog">Tech blog</Link></li>
                    <li><Link to="/team-builder">Team builder</Link></li>
                </ul>
            </nav>
        </Div>
    )
};

export default navigation;