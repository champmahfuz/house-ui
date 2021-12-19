import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://still-fjord-86378.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://still-fjord-86378.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }
    return (
        <>
            <div className="manage">
                <h2 className="text-primary">Manage products</h2>
                <div className="manage-container">
                    {

                        products.map(product => <div key={product._id}>
                            <div className=" mr-3 w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-5 g-5">
                                <div className="card">
                                    <div className="property-img">
                                        <img src={product.img} alt="" />
                                    </div>
                                    <div className="property-info">
                                        <h1>{product.name}</h1>
                                        <p>{product.description}</p>
                                        <button className="btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>)

                    }


                </div>
            </div>
        </>
    );
};

export default ManageProducts;