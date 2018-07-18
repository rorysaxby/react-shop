import React from 'react';
import BasketItem from './BasketItem/BasketItem'

const basketItems = (props) =>{
    return (
        <div className="basket col-2">
            <div className="gutter align-center">
                <h2>You have {props.items.length} in your basket</h2>
            </div>
            <div className="basket-list">
                <ul>{
                        props.items.map((item, index) => {
                            return <BasketItem
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                qty={item.qty}
                                key={item.id}
                                totalChanged={ (event) => props.updateTotal(event, item.id) }
                                deleted={() => props.deleteItem(item)}
                                />
                        })
                    }
                </ul>
                
            </div>
        </div>
    )
}

export default basketItems;