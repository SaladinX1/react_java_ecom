import { useState, useEffect } from "react";
import http from '../http/http';
import './Log.css';

export default function Log () {

    let {logPannel, setLogPannel } = useState(false);

    useEffect(() => {

        if (logPannel == false) {
            document.querySelector('.signup').display = 'none';
            document.querySelector('.login').display = 'block';
        } else {
            document.querySelector('.signup').display = 'block';
            document.querySelector('.login').display = 'none';
        }

        const email = document.querySelector('#email').ariaValueMax;
        const password = document.querySelector('#mdp').ariaValueMax;

       
            
            document.querySelector('.login').addEventListener('click', () => {
                http.post(`/connexion/authenticate`, {
                    email : email,
                    password : password
                }, { headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'Application/json',
    
                  }
                 })
                 .then(data => {return data.data.json()})
                 .then(res => {
                    console.log('success');
                 })
                 .catch(err => console.log(err))
           })

           document.querySelector('.signup').addEventListener('submit', (e) => {
            e.preventDefault();
            http.post(`/connexion/add-user`, {
                email : email,
                password : password
            }, { headers: {
                'Content-Type': 'application/json',
                'Accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`

              }
             })
             .then(data => {return data.data.json()})
             .then(res => {
                console.log('success');
             })
             .catch(err => console.log(err))
       })
        
           return (
             document.querySelector('.logbtn').removeEventListener('click', () => {})
            )

    }) 
        
        

    return (

        <div className="log_container">
            <form className="login">

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required />

                <label htmlFor="mdp">Mot de passe</label>
                <input id="mdp" type="password" required />

                <button type="submit" className="logbtn" >Connexion</button>

               <a onClick={() => setLogPannel(!logPannel)} >Pas encore inscrit ?</a> 
            </form>   


            <form className="signup">

                <label htmlFor="nom">nom</label>
                <input id="nom" type="text" required />

                <label htmlFor="prenom">prenom</label>
                <input id="prenom" type="text" required />

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required />

                <label htmlFor="mdp">Mot de passe</label>
                <input id="mdp" type="password" required />

                <label htmlFor="adresses">adresses</label>
                <input id="adresses" type="text"  />

                <label htmlFor="cartesDePaiement">N° cartesDePaiement</label>
                <input id="cartesDePaiement" type="text" required />

                <label htmlFor="telephone">telephone</label>
                <input id="telephone" type="number"  />
                
                <label htmlFor="dateNaissance ">dateNaissance </label>
                <input id="dateNaissance " type="number"  />

                <button type="submit" className="signUpBtn" >Je m'inscris</button>

              
            </form>
            
        </div>

    )
}