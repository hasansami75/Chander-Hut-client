import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var user = firebase.auth().currentUser;
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/home"><h3>CHANDER HUT</h3></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/order">Orders</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/authority">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/home">Deals</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {
                                user ? <span class="text-success mt-2 mr-2" >{user.displayName}</span> : <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>
                            }
                            {
                                user ? <Link to="/home"><button onClick={signOut} class="btn btn-outline-success" type="submit">Sign Out</button></Link> : <button style={{display:'none'}}></button>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;