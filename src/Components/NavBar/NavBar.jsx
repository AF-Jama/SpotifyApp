import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faVirusCovidSlash,faX } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../customHooks/useAuth';
import useFetch from '../../customHooks/useFetch';
import ActionButton from '../Common/ActionButton';
import './NavBar.css';

function NavBar(props) {
    const [visibility,setVisibility] = useState(false); // set visibility state
    const { accessToken,isAuthenticated,Logout } = useAuth(); // use Auth hook
    const { data,loading,error  } = useFetch('https://api.spotify.com/v1/me');

    console.log(data);
    
    const navLinksContainer = useRef();

    console.log(accessToken);

    const onNavLinksContainer = (event)=>{
        event.preventDefault();

        if(visibility){
            navLinksContainer.current.style.width = "0px";
            setVisibility(!visibility);
            return;
        }
        navLinksContainer.current.style.width = "auto";
        setVisibility(!visibility);
        return;
    }

    const onLoginClick = (event)=>{
        event.preventDefault();

        console.log("SUCCESFULL");
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&state=${process.env.REACT_APP_STATE}&scope=${process.env.REACT_APP_SCOPE}`;
        return;

    }

    const onLogoutClick = (event)=>{
        event.preventDefault();

        console.log("SUCCESFULL")

        Logout();
    }

    // console.log(accessToken);
    // console.log(data);

    return (
        <nav>
            <div id="nav-links" ref={navLinksContainer}>
                <a href="#" className='nav-link'>Home</a>
                <a href="#" className='nav-link'>Home</a>
                <a href="#" className='nav-link'>Github</a>
                <div id="action-btn-container">
                    {isAuthenticated?<ActionButton text="Logout" onClick={onLogoutClick}/>:<ActionButton text="Login" onClick={onLoginClick}/>}
                </div>
                {(data && !loading) && 
                
                <div id="user-container">
                    <p>User: {data.display_name}</p>
                    {data.images[2]?<img src={data.images[2]} alt="" />:""}
                </div>
                
                
                }  
            </div>


            <div id="burger-btn-container">
                {visibility?<FontAwesomeIcon icon={faX} size="2x" color='white' onClick={onNavLinksContainer}/>:<FontAwesomeIcon icon={faBars} size="2x" onClick={onNavLinksContainer}/>}
            </div>
        </nav>
    );
}

export default NavBar;