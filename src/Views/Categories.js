import React, { useEffect } from "react";

import http from '../http/http';


export default function Categories() {

    function createCategorie() {
        http.post(`/categorie/add`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    function getCategorie() {
        http.post(`/categorie/get-{id}`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    function deleteCategorie() {
        http.post(`/categorie/remove-{id}`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    function updCategorie() {
        http.post(`/categorie/update-{id}`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    useEffect(() => {


        document.querySelector('.createCategorie').addEventListener('submit', createCategorie());
        document.querySelector('.UpdateCategorie').addEventListener('submit', updCategorie());

        return(
            document.querySelector('.createCategorie').removeEventListener('submit', createCategorie())
            // document.querySelector('.UpdateCategorie').removeEventListener('submit', updCategorie())
        )


    })

    return (


    <div>

        <form className="createCategorie">

        <label htmlFor="nom">nom</label>
        <input id="nom" type="text" required />

        <label htmlFor="photo">photo</label>
        <input id="photo" type="text" required />

        <label htmlFor="photos">photos</label>
        <input id="photos" type="file"  />

                <button type="button" onClick={() => createCategorie()} >Créer Categorie</button>

        </form>

            <form className="UpdateCategorie">

            <label htmlFor="nom">nom</label>
            <input id="nom" type="text" required />

            <label htmlFor="photo">photo</label>
            <input id="photo" type="text" required />

            <label htmlFor="photos">photos</label>
            <input id="photos" type="file"  />
            
             <button type="button" onClick={() => updCategorie()} >Modifier Categorie</button>

            </form>


    </div>

  /* remise & liste Article */


            // <button type="button" onClick={() => deleteCategorie()} >Supprimer Categorie</button>
            // <button type="button" onClick={() => getCategorie()} >Récupérer Categorie</button>
    



// articles
    
    ) 

    
}