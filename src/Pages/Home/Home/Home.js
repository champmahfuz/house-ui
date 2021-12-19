import React, { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import { SliderData } from '../Banner/SliderData';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://still-fjord-86378.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <div id="home">
            <Banner slides={SliderData}></Banner>
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
            <AboutUs></AboutUs>
            <Albums></Albums>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;