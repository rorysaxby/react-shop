import React from 'react';
import StoreItem from './StoreItem/StoreItem';

const storeItems = (props) =>{
    return (
        <div className="cards-grid col-2">
            <div className="gutter align-center">
                <h2>Select your products</h2>
            </div>
            <ul className="flex-wrap">
                {
                    props.items.map((item, index) => {
                        return <StoreItem 
                                id={item.id}
                                name={item.name} 
                                price={JSON.parse(item.price).toFixed(2)}
                                key={item.id} 
                                addItem={props.addItem}
                            />
                    })
                }
            </ul>
        </div>
    )
}

export default storeItems;