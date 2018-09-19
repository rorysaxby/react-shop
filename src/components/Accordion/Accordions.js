import React, { Component } from 'react';

import Div from '../../hoc/Div';

class Accordions extends Component{

    constructor(props) {
        super(props);

        this.state = {
            accordions: React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                    toggleFn: this.toggleAccordion,
                    buttonClassActive: "",
                    viewContainerClassActive: ""
                });
            })
        };
        
    };

    hideAccordions = () => {
        let accs = [...this.state.accordions];
        for(let i = 0; i < accs.length; i++){
            accs[i].props.buttonClassActive = this.props.buttonClassActive;
        };
    };

    toggleAccordion = (id) =>{

        this.hideAccordions();
    };

    closeAccordions = () => {

    };
    
    render(){
        return(
            <Div>
                <div className="accordions">
                    { this.state.accordions }
                </div>
            </Div>
        )
    }
}

export default Accordions;
