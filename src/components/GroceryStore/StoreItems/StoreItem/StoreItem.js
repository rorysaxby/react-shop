import React from 'react';

const storeItem = (props) =>{
    return (
        <li className="card-container">
            <div className="card" onClick={ () => props.addItem({
                    id:props.id,
                    name:props.name,
                    price:props.price,
                    qty:1
                })}>
                <content className="card-content">
                    <h3>{props.name}</h3>
                    <p>£{props.price}</p>
                </content>
            </div>
        </li>
    )
};

export default storeItem;