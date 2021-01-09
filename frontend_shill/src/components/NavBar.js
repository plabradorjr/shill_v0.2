import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, logoutUser } from '../actions/userActions';

const NavBar = () => {

    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.userReducer.currentUser)

    useEffect(() => {
       if (!user.is_logged) dispatch(fetchCurrentUser());
    },[dispatch, user.is_logged]);


    const handleLogoutClick = (e) => {
    
        dispatch(logoutUser());
        e.preventDefault();
    }

    const handleLoginClick = (e) => {
        window.location = 'http://localhost:3030/auth/twitter'
    }

    return (
        <>
        <nav className="navbar navbar-light bg-dark justify-content-between px-5">
            <p>✨ Shill.lol ✨</p>
            {user.is_logged && <p>Hello,  {user.name}</p>}

            <form className="form-inline">
                {user.is_logged && <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={handleLogoutClick}>Logout</button>}
                {!user.is_logged && <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={handleLoginClick}>Login via Twitter</button>}
                
            </form>
        </nav>
        </>
    )

}

export default NavBar;