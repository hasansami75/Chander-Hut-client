import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState({
        name: "",
        price: "",
        productName : '',
        productImg : '',
        productWeight : ''
    });
     
    console.log(products);
    console.log(details)
    useEffect(() => {
        fetch('https://glacial-peak-87735.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const result = products.map(product => {
        if (product._id === { id }.id) {
            details.name = product.name;
            details.price = product.price;
            details.productName = product.name;
            details.productImg = product.imageURL;
            details.productWeight = product.weight;
            loggedInUser.price = details.price;
            loggedInUser.productName = details.productName;
            loggedInUser.productWeight =  details.productWeight;
            loggedInUser.productImg = details.productImg;
        }
    })
    return (
        <div>
            <Header/>
            <div className="container">
                <h1 class="my-5">Check Out</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{details.name}</th>
                            <td>1</td>
                            <td>{details.price}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td>{details.price}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/placeorder"><p class="text-center"><button class="btn btn-danger">CheckOut</button></p></Link>
            </div>
        </div>
    );
};

export default CheckOut;