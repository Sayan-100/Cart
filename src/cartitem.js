import React from 'react';

class CartItem extends React.Component {
//CartItem will inherit some features from the Component class in React 
//extend
    
    constructor (){
        super(); // constructor of component class (parent)
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
        //multiple getas it messier
    }
    
    //method

    // increaseQuantity()
    // {
    //     console.log('this.state', this.state);
    // }

    increaseQuantity = () => {
        console.log('this', this.state);
    }

    //arrow function will d the value to the instance of the CartItem

    render(){
        const {price, title, qty} = this.state;
        return(
            <div className  = "cart-item">
                <div className = "left-block">
                    <img style = {stylse.image}/>
                </div>

                <div className = "right-block">
                    {/* <div style = {{fontSize : 25}}>{this.state.title}</div> */}
                    <div style = {{fontSize : 25}}>{title}</div>
                    <div style = {{color : '#777'}}>Rs {price}</div>
                    <div style = {{color : '#777'}}>Qty : {qty}</div>
                    <div className ="cart-item-actions">
                    {/* Buttons */}
                    <img 
                      alt="increase" 
                      className ="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                      onClick = {this.increaseQuantity}
                     //   onClick={this.increaseQuantity.bind(this)}
                    
                      />
                    <img 
                      alt="decrease" 
                      className ="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    //   onClick={this}
                      />
                    <img 
                      alt="delete" 
                      className ="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    //   onClick={this}
                      />
                </div>
                </div>
            </div>
        ); 
    }
}



const stylse = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}


//state 
// {
//     titel: 
//     price:
//     qty:
//     img;
// }


export default CartItem;