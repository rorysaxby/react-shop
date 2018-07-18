import React from 'react';

const basketItem = (props) =>{
    return (
        <li className="basket-item">
            <div className="basket-item-name">{props.name}</div>
            <div className="basket-item-price">£{props.price}</div>
            <div className="basket-item-qty"><label>Qty</label><input type="number" onChange={props.totalChanged} value={props.qty}/></div>
            <div className="basket-item-remove"><button type="button" onClick={props.deleted}>Delete</button></div>
        </li>
    )
}

export default basketItem;