import React from 'react'
import Cart from './cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor (){
    super(); // constructor of component class (parent)
    this.state = {
      // products: [
      //     {
      //         price : 99,
      //         title : 'Watch',
      //         qty : 1,
      //         img : 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
      //         id : 1
      //     },

      //     {
      //         price : 999,
      //         title : 'Mobile Phone',
      //         qty : 10,
      //         img : 'https://images.unsplash.com/photo-1560268744-aaab797cdfc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      //         id : 2
      //     },
          
      //     {
      //         price : 999,
      //         title : 'Laptop',
      //         qty : 4,
      //         img : 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      //         id : 3
      //     }
      // ]
      products : [],
      loading : true
    }

    this.db = firebase.firestore();
}

componentDidMount () {
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);

  //   snapshot.docs.map((doc) => {
  //     console.log(doc.data())
  //   });

  //   const products = snapshot.docs.map((doc) => {
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //   })

  //   this.setState({
  //     products : products,
  //     loading : false
  //   })

  // firebase
  // .firestore()
  this.db
  .collection('products')
  // .where('price', '==', 999)
  // .where('title', '==', 'Mobile Phone')
  .orderBy('price', 'desc')
  .onSnapshot((snapshot) => {
      console.log(snapshot);
  
      snapshot.docs.map((doc) => {
        console.log(doc.data())
      });
  
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
  
      this.setState({
        products : products,
        loading : false
      })
  
    })

}

handleIncreaseQuantity = (product) => {

    console.log('Hey please increse the quantity of', product);
    const {products}=this.state;
    const index = products.indexOf(product);

    // products[index].qty = products[index].qty + 1;
    // qty -> 1 +
    // qty -> 2 in FB -> snapshot -> new prod new data -> setstate -> rerender -> new qty

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty : products[index].qty + 1
    })
    .then(() => {
      console.log('Updated successful');
    })
    .catch((error) => {
      console.log("Error: ", error);
    })


    this.setState({
        products : products
    })
}

handleDecreaseQuantity = (product) => {
    console.log('Hey please increse the quantity of', product);
    const {products}=this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
    {
        return;
    }

    // products[index].qty = products[index].qty - 1;


    // this.setState({
    //     products : products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty : products[index].qty - 1
    })
    .then(() => {
      console.log('Updated successful');
    })
    .catch((error) => {
      console.log("Error: ", error);
    })


    this.setState({
        products : products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    
    // const items = products.filter((item) => item.id !== id); //[{id not equall to argument id}]

    // this.setState({
    //     products : items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() => {
      console.log('Delete Successfully');
    })
    .catch((error) => {
      console.log('Error : ', error);
    })

}

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
   
  products.forEach((product) => {
    count += product.qty;
  })
  
  return count;

}

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      if(product.qty > 0)
      {
        cartTotal = cartTotal + product.qty * product.price;
      }

      return '';

    })

    return cartTotal;
  }

  // addProduct = () => {
  //   this.db
  //   .collection('products')
  //   .add({
  //     img : '',
  //     price : 902,
  //     qty : 3,
  //     title : 'Washing Machine'

  //   })
  //   .then((docRef) => {
  //     console.log('product has been added');
  //     console.log(docRef);
  //   })
  //   .catch((error) => {
  //     console.log('Error: ', error);
  //   }) 
  // }


  render () {

    const {products, loading} = this.state;

    return (
      <div className="App">
        <Navbar count ={this.getCartCount()}/>
        {/* <button onClick = {this.addProduct} style = {{padding : 20, fontSize : 20}}>Add a product</button> */}
        <Cart
         products = {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
         />
         {loading && <h1>loading Products ...</h1>}
         <div style={{padding : 10, fontSize : 20}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
