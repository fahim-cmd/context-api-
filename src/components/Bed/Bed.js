import React, { useContext } from 'react';
import {CategoryContext} from '../../App';
const Bed = () => {

    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h4> this is your bed= {category} </h4>
            <button onClick={()=> setCategory("laptop")}>laptop</button>
            <button onClick={()=> setCategory("mobile")}>mobile</button>
            <button onClick={()=> setCategory("camera")}>camera</button>
        </div>
    );
};

export default Bed;