import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Div from '../../hoc/Div';
import { Route } from 'react-router-dom';

import GroceryStore from '../../components/GroceryStore/GroceryStore';
import TechBlog from '../../components/TechBlog/TechBlog';
import TeamConstructor from '../../components/TeamConstructor/TeamConstructor';

class Cockpit extends Component {
    render(){
        return(
            <Div>
                <div className="app-container">
                    <Header/>
                    <main>
                        <Route path="/" exact component={GroceryStore} />
                        <Route path="/grocery-store" exact component={GroceryStore} />
                        <Route path="/tech-blog" exact component={TechBlog} />
                        <Route path="/team-builder" exact component={TeamConstructor} />
                    </main>
                </div>
            </Div>
        )
    };
};

export default Cockpit;
