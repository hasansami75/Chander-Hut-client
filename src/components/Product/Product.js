import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import Login from '../Login/Login';
import firebaseConfig from '../Login/firebase.config';

const Product = ({ product }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var user = firebase.auth().currentUser;
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    return (
        <div className="col-md-4 mb-3">
            <div class="text-center bg-info">
                <img src={product.imageURL} class="img-fluid w-75 mt-3 border border-warning rounded" alt="..." />
                <h3 class="mt-3">{product.name}</h3>
                <span class="btn btn-primary mb-3">Price: {product.price}</span>
                
                <Link to={`/checkout/${product._id}`} class="btn btn-primary d-flex justify-content-around">Buy Now</Link>

            </div>
        </div>
    );
};

export default Product;