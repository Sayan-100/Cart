import React from 'react';
import CartItem from './cartitem'

class Cart extends React.Component {
//CartItem will inherit some features from the Component class in React 
//extend
    render()
    {
        return (
            <div className = "cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }

}





export default Cart;