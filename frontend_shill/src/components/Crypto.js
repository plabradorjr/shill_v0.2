import React from 'react';
//Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Crypto = ({name, symbol, image_url}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{symbol}</p>
            <img src={image_url}></img>
        </div>
    )
}

export default Crypto;

//test