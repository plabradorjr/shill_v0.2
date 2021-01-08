import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, logoutUser } from '../actions/userActions';

const NavBar = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCurrentUser());
    },[dispatch]);

    const user = useSelector((state) => state.userReducer.currentUser)

    const handleLogoutClick = (e) => {
    
        dispatch(logoutUser());
        e.preventDefault();
    }

    const handleLoginClick = () => {
        window.location.replace('http://localhost:3030/auth/twitter')
    }

    return (
        <div className="container">
            <p>Username: {user.name}</p>
            <p>{!user.is_logged && "not logged in"}</p>
            <div className="col-12">
                    <button onClick={handleLoginClick}>Login with Twitter</button>
                    <button onClick={handleLogoutClick}>LOG OUT</button>

            </div>
        </div>
    )

}

export default NavBar;