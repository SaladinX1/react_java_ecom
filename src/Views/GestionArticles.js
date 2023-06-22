import React, { useEffect } from "react";

import http from '../http/http';


export default function GestionArticles() {

    function createArticle() {
        http.post('/article/add', {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    function deleteArticle() {
        http.post(`/article/remove-{id}`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    function udpArticle() {
        http.post(`/article/update-{id}`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }

    function getArticle() {
        http.post(`/article/get-{id}`, {
            header : {
                'Content-Type': 'application/json',
                'accept' : 'Application/json',
                // 'Authorization' : `Bearer ${token}`
            }
        })
    }
    useEffect(() => {

        


        document.querySelector('.createArticle').addEventListener('submit', createArticle());

        return(
            document.querySelector('.createArticle').removeEventListener('submit', createArticle())
        )


    })

    return (

        <div>


        <form className="createArticle">

        <label htmlFor="nom">nom</label>
        <input id="nom" type="text" required />

        <label htmlFor="description">description</label>
        <input id="description" type="textarea" required />

        <label htmlFor="prix">prix</label>
        <input id="prix" type="number" required />

        <label htmlFor="stock ">stock</label>
        <input id="stock " type="number" required />

        <label htmlFor="photos">photos</label>
        <input id="photos" type="file"  />

        <label htmlFor="video">video</label>
        <input id="video" type="text"  />

            <button type="button" onClick={() => createArticle()} >Créer Article</button>
    
     </form>


        <form className="udpateArticle">

        <label htmlFor="nom">nom</label>
        <input id="nom" type="text" required />

        <label htmlFor="description">description</label>
        <input id="description" type="textarea" required />

        <label htmlFor="prix">prix</label>
        <input id="prix" type="number" required />

        <label htmlFor="stock ">stock</label>
        <input id="stock " type="number" required />

        <label htmlFor="photos">photos</label>
        <input id="photos" type="file"  />

        <label htmlFor="video">video</label>
        <input id="video" type="text"  />

            <button type="button" onClick={() => udpArticle()} >Modifier Article</button>
    
     </form>

        </div>
    
    ) 

    
}