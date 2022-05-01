import React from 'react';

const Navbar = (props) => {
    //this doesn't have a state thats why we can change it to function
   
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style ={styles.cartIcon}src="https://cdn-icons.flaticon.com/png/128/649/premium/649931.png?token=exp=1651326710~hmac=d8e185d8b5e8e478c00ea322e0706b96" alt ="cart-icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
     ); 
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  

export default Navbar;