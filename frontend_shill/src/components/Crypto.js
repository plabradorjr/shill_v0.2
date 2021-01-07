import React from 'react';
//Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import {loadCoinDetail} from '../actions/detailActions';
import {Link} from 'react-router-dom';

const Crypto = ({name, symbol, image_url, id}) => {
    //Load Detail
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        var srch = document.getElementById("srch");
        srch.classList.toggle("invisible");
        dispatch(loadCoinDetail(id))
    }

    return (
        <div className="cointiner">
            <div className="row"> 
                <StyledCrypto onClick={loadDetailHandler}>
                    <Link to={`/coin/${id}`}>
                        <h3>{name}</h3>
                        <p>$ {symbol}</p>
                        {image_url && <img src={image_url} alt={name}></img>}
                        
                    </Link>
                    <br></br>
                    {/* <button type="button" class="btn btn-primary">Shill</button> */}
                </StyledCrypto>
            </div>
        </div>
        
    )
}

const StyledCrypto = styled(motion.div)`
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    padding-bottom: 1rem;
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
`

export default Crypto;

