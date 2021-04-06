import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import loader from '../../loader.gif';
import  '../Home/Home.css';


const Home = () => {
    
    const [products, setProducts] = useState([]);   
    useEffect(() => {
        fetch('https://glacial-peak-87735.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div>
            <Header/>
            <div className="container">
            <div className="row mt-5">
                {
                    products.length === 0 && <img className="loader-resize" src={loader}></img>
                }
                {
                    products.map(product => <Product product={product}></Product>
                )
                }
            </div>
            </div>
        </div>
    );
};

export default Home;