import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderDetails from '../OrderDetails/OrderDetails';
import loader from '../../loader.gif';
import '../Order/Order.css';


const Order = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);

    return (
        <>
            <Header />
            <div className="container mt-5">
                <h3>Hi, {loggedInUser.name}.</h3>
                <h5>You have total {orders.length} orders.</h5>
                <h6>See your order dashboard:</h6> <br />
                <div className="row">
                    <div className="col-md-12">
                        <table class="table">
                            <thead>
                                <tr class="bg-info rounded">
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Order Time</th>
                                </tr>
                                <img src="" alt="" />

                            </thead>
                            {
                                orders.length === 0 && <img className="loader-resize" src={loader}></img>
                            }
                            {
                                orders.map(order => <OrderDetails order={order}></OrderDetails>)
                            }

                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Order;