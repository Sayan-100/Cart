import React from 'react';
import CartItem from './cartitem'

class Cart extends React.Component {
//CartItem will inherit some features from the Component class in React 
//extend
    constructor (){
        super(); // constructor of component class (parent)
        this.state = {
          products: [
              {
                  price : 99,
                  title : 'Watch',
                  qty : 1,
                  img : '',
                  id : 1
              },

              {
                  price : 999,
                  title : 'Mobile Phone',
                  qty : 10,
                  img : '',
                  id : 2
              },
              
              {
                  price : 999,
                  title : 'Laptop',
                  qty : 4,
                  img : '',
                  id : 3
              }
          ]
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
        //multiple getas it messier
        // this.testing();
    }
    render()
    {
        // const arr = [1, 2, 3, 4, 5];
        const {products} = this.state;
        return (
            <div className = "cart">
                {/* {
                    // arr.map((item) => {
                    //     return item + 5;
                    //     // [6, 7, 8, 9, 10]
                    // })
                } */}

                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
                {
                    products.map((product) => {
                        return (
                         <CartItem 
                           product={product} 
                           key ={product.id}
                         />
                        ) 
                    })
                }
               
            </div>
        );
    }

}

// /* <CartItem />
//                 <CartItem />
//                 <CartItem /> */



export default Cart;