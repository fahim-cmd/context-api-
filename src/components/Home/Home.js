import React, { useContext, useEffect, useState } from 'react';
import Room from '../Room/Room';
import {CategoryContext} from '../../App';

const allProducts = [
    {name:"hp", category:"laptop"} , {name:"dell", category:"laptop"} , {name:"mackBook", category:"laptop"},
    {name:"walton", category:"mobile"} , {name:"samsung", category:"mobile"} , {name:"xiomi", category:"mobile"},
    {name:"Nikkon", category:"camera"} , {name:"sony", category:"camera"} , {name:"canon", category:"camera"}
]

const Home = () => {
    const [category] = useContext(CategoryContext);

    const [products, setProduct] = useState([])   

    useEffect(() => {
            const matchProduct = allProducts.filter(pd => pd.category === category.toLowerCase())
            setProduct(matchProduct);
    }, [category])
    return (
        <div>
            <h2> this is home , your house= {category}</h2>
            {
                products.map( pd => <Room product = {pd}></Room>)
            }
        </div>
    );
};

export default Home;