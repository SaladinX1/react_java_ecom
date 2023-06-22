import { Routes, Route, Link  } from "react-router-dom";
import { useState, useEffect } from "react";
import Log from "../Views/Log";
import './Header_nav.css';



export default function Header_nav(props) {

    let { log, setLog } = useState(false);

    useEffect(() => {

    //    const modifyState = setLog(() => {
    //         !log
    //     })

        

        if (log === false) {
           document.querySelector('.signinup').style.display = 'none';
        }

    })


    return (
        <nav className='header'>
        
        <img src="" alt="" className="logo" />
        {/* <Link to='/log' > Log</Link> */}

        <Link className="signinup" to='/log'>Inscription/Connexion</Link>

        <button onClick={ () =>  setLog(!log)  } >Bienvenue !</button>


        </nav>
    )
}

