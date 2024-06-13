"use client"
import React, { useState, useEffect } from 'react';
import "./Items.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faSuitcase, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Items = () => {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setProductCount(data.length);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="items-container">
            <div className="product-info">
                <div style={{
                    display:'flex'
                }}>
                    <p>Bags</p> <li style={{
                    position:'relative',left:'10px'}}>Bagpacks</li>
                </div>

                <div style={{
                    width:'200px',
                    display:'flex',
                    position:'relative'
                }}>
                    <span style={{
                        position:'relative',
                        left:'10px'
                    }}>{productCount}</span>
                    <span style={{
                        position:'relative',
                        left:'30px'
                    }}>Products</span>
                    <a style={{
                         position:'relative',
                        left:'60px'
                    }} href="#share"><FontAwesomeIcon style={{ height: '20px'}} icon={faArrowUpFromBracket} /></a>
                </div>

            </div>
            <div className="products-grid">
                {products.map(product => (
                    <div className="products-card" key={product.id}>
                        <div className="card-items">
                            <div className="card-img">
                                <img src={product.image} alt={product.title} />
                                <FontAwesomeIcon
                                    style={{ color: '#333', height: '30px', position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
                                    icon={faBookmark}
                                />
                            </div>
                            <h6>{truncateText(product.title, 30)}</h6>
                            <div className="price-info">
                                <p>${product.price.toFixed(2)}</p>
                                <span>${(product.price / 2).toFixed(2)} (50% Off)</span>
                                <FontAwesomeIcon style={{ height: '25px' }} icon={faSuitcase} />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Items;
