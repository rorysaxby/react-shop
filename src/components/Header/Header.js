import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Div from '../../hoc/Div';

class Header extends Component {
    render(){
        return(
            <Div>
                <header className="header">
                    <div className="wrap">
                        <Navigation/>
                    </div>
                </header>
            </Div>
        )
    };
};

export default Header; 