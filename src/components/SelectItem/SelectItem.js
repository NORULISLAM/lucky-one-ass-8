import React from 'react';
import './SelectItem.css'

const SelectItem = (props) => {
    const { img, name } = props.product;
    return (
        <div>
            <div className='SelectItem'>
                <p>
                    <img src={img} alt="" />
                </p>
                <p>{name}</p>
            </div>


        </div>

    );

};


export default SelectItem;