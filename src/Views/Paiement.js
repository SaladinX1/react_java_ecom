import React from "react";




export default function Paiement() {


    function createPaiement() {

        http.post('/createPay', {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })

    };


    document.querySelector('.createPaiement').addEventListener('submit', () => createPaiement());




    return (

        <div>

        <form className="createPaiement">

        <label htmlFor="nomProprietaire">nomProprietaire</label>
        <input id="nomProprietaire" type="text" required />

        <label htmlFor="prenomProprietaire">prenomProprietaire</label>
        <input id="prenomProprietaire" type="text" required />

        <label htmlFor="numero">numero</label>
        <input id="numero" type="number" required />

        <label htmlFor="dateFinValidite">date Fin Validite</label>
        <input id="dateFinValidite" type="date" required />

        <label htmlFor="cryptogramme">cryptogramme</label>
        <input id="cryptogramme" type="number"  />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" required />

                <button type="button" onClick={() => createPaiement()}>Créer Categorie</button>

        </form>

            <form className="UpdatePaiement">

            <label htmlFor="nomProprietaire">nomProprietaire</label>
        <input id="nomProprietaire" type="text" required />

        <label htmlFor="prenomProprietaire">prenomProprietaire</label>
        <input id="prenomProprietaire" type="text" required />

        <label htmlFor="numero">numero</label>
        <input id="numero" type="number" required />

        <label htmlFor="dateFinValidite">date Fin Validite</label>
        <input id="dateFinValidite" type="date" required />

        <label htmlFor="cryptogramme">cryptogramme</label>
        <input id="cryptogramme" type="number"  />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" required />


            
             <button type="button" onClick={() => updCategorie()} >Modifier Categorie</button>

            </form>


    </div>


    )
    
}