import React from 'react';

const OrderDetails = ({order}) => {
    console.log(order)
    return (
        <>
            <tbody class="table-dark">
                <tr>
                    <th scope="row">{order.productName}</th>
                    <td>{order.price}</td>
                    <td>{order.ProductWeight}</td>
                    <td>{new Date(order.time).toDateString('dd/MM/yyyy')}</td>
                    <td>{new Date(order.time).toTimeString()}</td>
                </tr>
            </tbody>
            {/* <li>{order.name} You ordered {order.productName} Weight:{order.productWeight} Order Time: {new Date(order.time).toDateString('dd/MM/yyyy')}</li> */}
        </>
    );
};

export default OrderDetails;