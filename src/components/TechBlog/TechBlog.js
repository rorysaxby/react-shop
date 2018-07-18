import React, { Component } from 'react';

import Div from '../../hoc/Div';

class TechBlog extends Component{
    constructor(props) {
        super(props);

        this.state = {
            blogPosts:[]
        };
    };

    render(){
        return (
            <Div>
                <div className="page-intro">
                    <h2>Tech Blog (coming soon)</h2>
                </div>
                <div className="blog-list">
                    <div className="wrap">
                        <ul>
                            <li className="blog-list-card">
                                <h2>Example Blog Title</h2>
                                <p>Description of some sort</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Div>
        )
    }
};

export default TechBlog;
