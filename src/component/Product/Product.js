import React from 'react';
import './Product.css'

const Product = (props) => {
    const {addToCartShop, product} = props;
    const {name, price, img, ratings, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={()=> addToCartShop(props.product)}>
                <p >Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;