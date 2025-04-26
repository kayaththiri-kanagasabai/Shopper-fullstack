import React,{createContext, useEffect, useState} from "react";

// created ShopContext using createContext
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
// cerated one function called ShopContextProvider,pass the props
const ShopContextProvider = (props) => {
    const[all_product,setAll_Product] =useState([]);

    const [cartItems, setCartItems] = React.useState(getDefaultCart()); // created a state called cartItems and set the default value to getDefaultCart function
  
    useEffect(() => {
    fetch("https://localhost:40000/all_product")
    .then((respose) => respose.json())
    .then((data) => setAll_Product(data)) 
if(localStorage.getItem("auth_token")){
    fetch("https://localhost:40000/getcart",{
        method:"POST",
        headers:{
            Accept:"application/formData",
            'auth-token' : `${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json'
        },
        body:"",
    })
    .then((response) => response.json())
    .then((data) =>setCartItems(data));


}
    },[])

const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })) // when the addToCart function is called, it will update the cartItems state by adding 1 to the itemId
}
if(localStorage.getItem("auth_token")){
    fetch("https://localhost:40000/addtocart",{
        method:"POST",
        headers:{
            Accept:"application/json",
            'auth-token' : `${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json'
    },
    body:JSON.stringify({"ItemId":itemId}),
})
.then((response) => response.json())
.then((data) => console.log(data)) 

}


const getTotalCartAmount =()=>{
    let totalAmount = 0;
    for (const item in cartItems) 
    {
        if(cartItems[item] > 0) // check if the item is greater than 0
        {
            let itemInfo = all_product.find((product) => product.id === Number(item)); // find the item in the all_product array
            totalAmount += cartItems[item] * itemInfo.new_price; // multiply the item with the new price and add it to the total amount
        }
        return totalAmount; // return the total amount
    }
}


const getTotalCartItems =()=>{
    let totalItems = 0;
    for (const item in cartItems) 
    {
        if (cartItems[item] > 0) // check if the item is greater than 0
        {
            totalItems += cartItems[item]; // add the item to the total items
        }
        
    }
    return totalItems; // return the total items
}





const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })) // when the addToCart function is called, it will update the cartItems state by adding 1 to the itemId
    if(localStorage.getItem("auth_token")){
        fetch("https://localhost:40000/removefromcart",{
            method:"POST",
            headers:{
                Accept:"application/json",
                'auth-token' : `${localStorage.getItem('auth_token')}`,
                'Content-Type': 'application/json'
        },
        body:JSON.stringify({"ItemId":itemId}),
    })
    .then((response) => response.json())
    .then((data) => console.log(data)) 
}

const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,removeFromCart}; // created a contextValue variable and assigned all_product to it(all_product file is where the data and function are prebuild to use )
//when returning  the contextValue will pass
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    

)                   

}}
export default ShopContextProvider;