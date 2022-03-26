import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectItem from '../SelectItem/SelectItem';
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
                <h3>Selected Book</h3>
                <div>
                    {
                        cart.map(product =>
                            <SelectItem
                                key={product.id}
                                product={product}
                            ></SelectItem>

                        )

                    }
                </div>

            </div>
        </div>
    );
};

export default Book;