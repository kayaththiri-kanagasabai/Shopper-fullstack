import React,{createContext} from "react";
import all_product from "../Components/Assets/all_product"

// created ShopContext using createContext
export const ShopContext = createContext(null);

// cerated one function called ShopContextProvider,pass the props
const ShopContextProvider = (props) => {

const contextValue ={all_product}; // created a contextValue variable and assigned all_product to it(all_product file is where the data and function are prebuild to use )


//when returning  the contextValue will pass
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    

)                   

}
export default ShopContextProvider;