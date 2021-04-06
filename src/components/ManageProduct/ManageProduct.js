import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageProduct = ({ product, setProducts, products }) => {
    console.log(product._id)
    const deleteEvent = (id) => {
        fetch(`https://glacial-peak-87735.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remaining = products.filter(product => product._id !== id);
                     setProducts(remaining);

            })
    }
    return (
        <>
            <tbody class="table-warning">
                <tr>
                    <th scope="row">{product.name}</th>
                    <td>{product.price}</td>
                    <td>{product.weight}</td>
                    <td><DeleteIcon style={{color:'red', cursor: 'pointer'}} onClick={() => deleteEvent(product._id)}/></td>
                </tr>
            </tbody>

        </>
    );
};

export default ManageProduct;