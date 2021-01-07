import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const Main = () => {

        const [ category, setCategory] = useContext(CategoryContext);
        
    return (
        <div>
            <h1> this is main component = {category} </h1>
            <button onClick={()=> setCategory(category)}>increase</button>
            
        </div>
    );
};

export default Main;