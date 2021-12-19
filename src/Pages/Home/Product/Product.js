import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;
    return (
        <div>
            <div className="card">
                <div className="property-img">
                    <img src={img} alt="" />
                </div>
                <div className="property-info">
                    <h1>{name}</h1>
                    <h5>{price}</h5>
                    <p>{description}</p>
                    <Link to={`/booking/${_id}`}>
                        <button className='btn btn-primary'>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;


