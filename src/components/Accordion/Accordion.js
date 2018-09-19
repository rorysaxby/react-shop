import React, { Component } from 'react';

import Div from '../../hoc/Div';

// const accordion = (props) =>{

//     return (
//         <Div>
//             <div className={props.buttonClassContainer + " " + props.buttonClassActive}>
//                 <button type="button" onClick={ () => props.toggleFn(props.buttonName)} className={props.buttonClass}>{props.buttonName}</button>
//             </div>
//             <div className={props.viewContainerClass + " " + props.viewContainerClass}>
//                 {props.children}
//             </div>
//         </Div>
//     );
// }

// export default accordion;

class Accordion extends Component{
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });  
    };

    render(){
        return(
            <Div>
                <div className={this.props.buttonClassContainer + " " + this.props.buttonClassActive}>
                    <button type="button" onClick={ () => this.props.toggleFn()} className={this.props.buttonClass}>{this.props.name}</button>
                </div>
                <div className={this.props.viewContainerClass + " " + this.props.viewContainerClass}>
                    {this.props.children}
                </div>
            </Div>
        )
    }
}

export default Accordion;