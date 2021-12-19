import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://still-fjord-86378.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="properties" className="property-container">
            <h2 className="text-primary">Our Products</h2>
            <section>
                <div className="properties">
                    <div className="card-body">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;




