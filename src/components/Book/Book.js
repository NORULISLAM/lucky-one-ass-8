import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Book.css';
const Book = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='book-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3>Selected Product</h3>
                {console.log(cart)}
                <p>Item: {cart[0].name}</p>

            </div>
        </div>
    );
};

export default Book;