import React, { useContext,ShopContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const{all_product, cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
<div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr />
{all_product.map((e)=>{
 if(cartItems[e.id] >0)
 {
    return <div>
        {/* individual cart item */}

    <div className="cartitems-format cartitems-format-main">
        <img src={e.image} alt="" className='carticon-product-icon' />
        <p>{e.image}</p>
        <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.new_price*cartItems[e.id]}</p>
        <img src={ remove_icon } onClick={()=>{removeFromCart(e.id)}} alt="" />
    </div>
        <hr />
</div>
 }
 return null;
}

)}
<div className="cartitem-down">
<div className="cartitem-total">
    <h1>cart Totals</h1>
    <div className="cartitems-total-item">
        <p>Subtotal</p>
        <p>${0}</p>
    </div>
    <hr />
    <div className='cartitems-total-item'>
        <p>Shipping Fee</p>
        <p>Free</p>
    </div>
    <hr />
    <div className='cartitems-total-item'>
        <h3>Total</h3>
        <h3>${0}</h3>
    </div>
</div>
<button>PROCEED TO CHECKOUT</button>
</div>
<div className="cartitems-promocode">
    <p>If you have code, Enter it here</p>
    <div className="cartitems-promobox">
        <input type="text" placeholder='promo code' />
        <button>Submit</button>
    </div>
</div>
</div>

    
  )
}

export default CartItems