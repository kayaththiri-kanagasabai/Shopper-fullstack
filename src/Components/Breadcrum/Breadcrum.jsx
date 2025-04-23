import React from 'react'
import './Breadcrum.css';
// import product from '../Assets/data_product.json';
import bread_crumimage from '../Assets/breadcrum_arrow.png';
const Breadcrum = (props) => {
    const{product} =props;
  return (
    <div className='breadcrum'>
 HOME <img src={bread_crumimage} alt="" />SHOP<img src={bread_crumimage} alt="" />{product.category}<img src={bread_crumimage} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum