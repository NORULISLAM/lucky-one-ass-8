import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Book.css';
const Book = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (
        <div className='book-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3>Selected Product</h3>

            </div>
        </div>
    );
};

export default Book;