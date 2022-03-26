import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectItem from '../SelectItem/SelectItem';
import './Book.css';
const Book = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const clear = () => {
        const newCart = [];
        setCart(newCart);
    }
    const chose = () => {

        const index = parseInt(Math.random() * 4)

        alert('buy this book: ' + cart[index].name);

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
                                key={product.price}
                                product={product}
                            ></SelectItem>)

                    }
                </div>

                <button onClick={chose} className='btn'>CHOOSE 1 FOR ME</button>
                <button onClick={clear} className='btn'>Reset</button>

            </div>

        </div >
    );
};

export default Book;