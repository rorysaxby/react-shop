import React, { Component } from 'react';

import Div from '../../hoc/Div';

class TeamConstructor extends Component{
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
                    <h2>Build your team structure (coming soon)</h2>
                </div>
                <div className="team-list">
                    <div className="wrap">
                        <div className="team-box">
                            <div className="team-detail">
                                <h2>Team title</h2>
                                <p>Overseeing and building the company</p>
                            </div>
                            <div className="team-list">
                                <ul>
                                    <li>
                                        <div className="team-card">
                                            <h3>Richard Hendricks</h3>
                                            <p>Position: CEO</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="team-card">
                                            <h3>Big Head</h3>
                                            <p>Position: Some guy</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="team-card">
                                            <h3>Erlich Bachman</h3>
                                            <p>Position: Chief Advisor</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Div>
        )
    }
};

export default TeamConstructor;
