import React from 'react';

// class CartItem extends React.Component {
//CartItem will inherit some features from the Component class in React 
//extend

  const CartItem = (props) => {
    //method

    // increaseQuantity()
    // {
    //     console.log('this.state', this.state);
    // }
    // testing (){
    //   const promise = new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('done');
    //     }, 5000)
    //   })

    //   promise.then(() => {

    //     // setState acts like a synchronous call
    //     // this.setState({qty : 100});
    //     this.setState({qty : this.state.qty + 10});
    //     this.setState({qty : this.state.qty + 10});
    //     this.setState({qty : this.state.qty + 10});
    //     console.log('state', this.state);
    //   });
    // }

    // increaseQuantity = () => {
    //     //this.state.qty += 1;
    //     // console.log('this', this.state);
    //     //setState 1

    //     //Batch object form
    //     // this.setState({
    //     //   qty : this.state.qty + 1
    //     // }, () => {

    //     //});

    //     // this.setState({
    //     //   qty : this.state.qty + 1
    //     // });

    //     // this.setState({
    //     //   qty : this.state.qty + 5
    //     // });//last call 

    //     //calling it three times but it is changing by single
    //     //Batching -- call is merged to single state call


    //     //setState 2
         
    //     //if previous state required use this
    //     // this.setState((prevState) => {
    //     //   return {
    //     //     qty : prevState.qty + 1
    //     //   }
          
    //     // });

    //     //if previous state required use this
    //     // this.setState((prevState) => {
    //     //   return {
    //     //     qty : prevState.qty + 1
    //     //   }
    //     // });
        
    //     // //if previous state required use this
    //     // this.setState((prevState) => {
    //     //   return {
    //     //     qty : prevState.qty + 1
    //     //   }
    //     // });

    //     // maintains a queue previous state updated
    //     // callback 1
    //     // callback 2
    //     // callback 3

    //     this.setState((prevState) => {
    //       return {
    //         qty : prevState.qty + 1
    //       }
    //     }, () => {
    //       console.log('this.state', this.state);
    //     });

    //     // console.log('this state', this.state);





    // }

    // decreaseQuantity = () => {
    //   console.log('this', this.state);

    //   const {qty} = this.state;
    //   if(qty == 0)
    //   {
    //     return;
    //   }

    //   this.setState((prevState) => {
    //     return {
    //       qty : prevState.qty - 1
    //     }
    //   })
    // }

    //arrow function will add the value to the instance of the CartItem

    // render(){
      console.log('render');
      console.log('this props', props);
    
        // const {price, title, qty} = this.state;
        // const {price, title, qty} = this.props.product;
        const {price, title, qty} = props.product;
        // const {
        //   product, 
        //   onIncreaseQuantity, 
        //   onDecreaseQuantity, 
        //   onDeleteProduct} = this.props;
          const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct} = props;
        return(
            <div className  = "cart-item">
              {/* {this.props.jsx} */}
                <div className = "left-block">
                    <img style = {stylse.image} src={product.img}/>
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
                      onClick={() => onIncreaseQuantity(product)}
                    //   onClick={this.increaseQuantity.bind(this)}
                    
                      />
                    <img 
                      alt="decrease" 
                      className ="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                      onClick={() => onDecreaseQuantity(product)}
                      />
                    <img 
                      alt="delete" 
                      className ="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                      onClick={() => onDeleteProduct(product.id)}
                      />
                </div>
                </div>
            </div>
        ); 
    // }
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