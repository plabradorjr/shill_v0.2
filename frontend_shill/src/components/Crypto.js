import React from 'react';
//Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Crypto = ({name, symbol, image_url}) => {
    return (
        <StyledCrypto>
            <h3>{name}</h3>
            <p>{symbol}</p>
            <img src={image_url} alt={name}></img>
        </StyledCrypto>
    )
}

const StyledCrypto = styled(motion.div)`
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
`

export default Crypto;

//test