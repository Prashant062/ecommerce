"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Items.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faSuitcase, faBookmark } from '@fortawesome/free-solid-svg-icons';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

const ProductCard = ({ product }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="products-card">
            <div className="card-items">
                <div className="card-img">
                    <img src={product.image} alt={product.title} />
                    <FontAwesomeIcon
                        className="bookmark-icon"
                        icon={faBookmark}
                    />
                </div>
                <h6>{truncateText(product.title, 30)}</h6>
                <div className="price-info">
                    <p>${product.price.toFixed(2)}</p>
                    <span style={{color:'red'}}>${(product.price / 2).toFixed(2)} (50% Off)</span>
                    <FontAwesomeIcon className="suitcase-icon" icon={faSuitcase} />
                </div>
            </div>
        </div>
    );
};

const Items = () => {
    const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <div className="items-container">
             <div className="product-info">
                <div style={{
                    display:'flex'
                }}>
                    <p>Bags</p> <li style={{
                    position:'relative',left:'10px'}}>Bagpacks</li>
                </div>
                
                <div className="product-summary">
                    <span>{products.length}</span>
                    <span style={{
                        position:"relative",left:'20px'
                    }}>Products</span>
                    <a href="#share">
                        <FontAwesomeIcon className="share-icon" icon={faArrowUpFromBracket} />
                    </a>
                </div>
            </div>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Items;
