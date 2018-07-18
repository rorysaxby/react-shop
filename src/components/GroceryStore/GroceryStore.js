import React, { Component } from 'react';
import StoreItems from './StoreItems/StoreItems';
import BasketItems from './BasketItems/BasketItems';

class GroceryStore extends Component{
    constructor(props) {
        super(props);

        this.state = {
            basketItems:[],
            basketTotal:0,
            storeItems:[
                {
                    id:1,
                    name:'Bananas',
                    price: 1.20
                },
                {
                    id:2,
                    name:'Apples',
                    price: 1.60
                },
                {
                    id:3,
                    name:'Oranges',
                    price: 0.90
                },
                {
                    id:4,
                    name:'Pears',
                    price: 1.40
                },
                {
                    id:5,
                    name:'Sprouts',
                    price: 1.10
                },
                {
                    id:6,
                    name:'Broccoli',
                    price: 0.80
                },
                {
                    id:7,
                    name:'Potatoes',
                    price: 2.00
                },
                {
                    id:8,
                    name:'Carrots',
                    price:0.70
                }
            ]
        };
    };

    getItemIndex = (arrayProp, targetProp, value) => {
        return this.state[arrayProp].findIndex(item => {
            return item[targetProp] === value;
        });
    };

    addItemHandler = (newItem) => {

        const basket = [...this.state.basketItems];
        const storeItems = [...this.state.storeItems];
    
        const itemIndex = this.getItemIndex('storeItems', 'id', newItem.id);
        storeItems.splice(itemIndex, 1);
        
        basket.push(newItem);

        this.setState({
            basketItems: basket,
            storeItems: storeItems
        });

        this.updateBasketTotal(newItem.qty, 0, newItem.price);
    };

    removeItemHandler = (deleteItem) => {
        const basket = [...this.state.basketItems];
        const storeItems = [...this.state.storeItems];
        const itemIndex = this.getItemIndex('basketItems', 'id', deleteItem.id);

        const prevQty = basket[itemIndex].qty;

        basket.splice(itemIndex, 1);
        
        storeItems.push(deleteItem);

        this.setState({
            basketItems: basket,
            storeItems: storeItems
        });

        this.updateBasketTotal(0, prevQty, deleteItem.price);
    };    

    updateTotalHandler = ( event, id ) => {
        const itemIndex = this.state.basketItems.findIndex(item => {
            return item.id === id;
        });

        const basket = [...this.state.basketItems];
        const prevQty = basket[itemIndex].qty;
        basket[itemIndex].qty = event.target.value;

        this.setState({basketItems:basket});

        this.updateBasketTotal(basket[itemIndex].qty, prevQty, basket[itemIndex].price);
    };

    updateBasketTotal = (newQty, prevQty, price) => {
        if(newQty > -1 && prevQty > -1){
            const state = {...this.state};
            const resetTotal = state.basketTotal - (JSON.parse(price) * prevQty);
                  
            const newTotal = resetTotal + (JSON.parse(price) * newQty);
            this.setState({basketTotal: newTotal});
        };
    };

    render(){
        return (
            <div className="wrap bottom-30">
                <div className="page-intro">
                    <h2>Fresh fruit and veg to go...</h2>
                </div>
                <div className="basket-total">
                    Total Price: <span className="basket-total-price">£{ this.state.basketTotal.toFixed(2) }</span>
                </div>
                <div className="flex-wrap">
                    <StoreItems items={this.state.storeItems} addItem={this.addItemHandler}/>
                    <BasketItems items={this.state.basketItems} updateTotal={this.updateTotalHandler} deleteItem={this.removeItemHandler}/>
                </div>
            </div>
        )
    }
};

export default GroceryStore;
