import React, { Component } from 'react';

import Accordions from '../Accordion/Accordions';
import Accordion from '../Accordion/Accordion';
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
                <Accordions buttonClassActive="active" viewContainerClassActive="active">
                    <Accordion buttonClassContainer="button-container" buttonClass="button" buttonName="Example Accordion 1">
                        <h3>Accordion 1</h3>
                    </Accordion>
                    <Accordion buttonClassContainer="button-container" buttonClass="button" buttonName="Example Accordion 2">
                        <h3>Accordion 2</h3>
                    </Accordion>
                </Accordions>

                {/* <Accordion toggleFn={this.toggleAccordion} buttonClassContainer="button-container" buttonClass="button" buttonClassActive="" buttonName="Example Accordion" viewContainerActiveClass="">
                    <p>Here is some example content</p>
                </Accordion>
                <Accordion toggleFn={this.toggleAccordion} buttonClassContainer="button-container" buttonClass="button" buttonClassActive="" buttonName="Example Accordion" viewContainerActiveClass="">
                    <p>Here is some example content</p>
                </Accordion> */}
                
                {/* <Accordion>
                    <div label='Alligator Mississippiensis'>
                    <p>
                        <strong>Common Name:</strong> American Alligator
                    </p>
                    <p>
                        <strong>Distribution:</strong> Texas to North Carolina, US
                    </p>
                    <p>
                        <strong>Endangered Status:</strong> Currently Not Endangered
                    </p>
                    </div>
                    <div label='Alligator Sinensis'>
                    <p>
                        <strong>Common Name:</strong> Chinese Alligator
                    </p>
                    <p>
                        <strong>Distribution:</strong> Eastern China
                    </p>
                    <p>
                        <strong>Endangered Status:</strong> Critically Endangered
                    </p>
                    </div>
                </Accordion> */}
            </Div>
        )
    }
};

export default TeamConstructor;
