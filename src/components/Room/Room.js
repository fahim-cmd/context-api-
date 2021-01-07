import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Bed from '../Bed/Bed';

const Room = (props) => {
    const {name} = props.product;
    const newCategory = useContext(CategoryContext);
    
    return (
        <div>
            <h3> this is room , you are nape here= {name}</h3>
            <Bed></Bed>
        </div>
    );
};

export default Room;