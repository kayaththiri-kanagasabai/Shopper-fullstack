import React,{createContext} from "react";
import all_product from "../Components/Assets/all_product"

// created ShopContext using createContext
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
// cerated one function called ShopContextProvider,pass the props
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = React.useState(getDefaultCart()); // created a state called cartItems and set the default value to getDefaultCart function


const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })) // when the addToCart function is called, it will update the cartItems state by adding 1 to the itemId
}
const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })) // when the addToCart function is called, it will update the cartItems state by adding 1 to the itemId
}

const contextValue ={all_product,cartItems,removeFromCart}; // created a contextValue variable and assigned all_product to it(all_product file is where the data and function are prebuild to use )
//when returning  the contextValue will pass
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    

)                   

}
export default ShopContextProvider;