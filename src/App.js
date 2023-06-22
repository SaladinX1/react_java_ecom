import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header_nav from './Components/Header_nav';
import Footer from './Components/Footer';
import Log from './Views/Log'
import Articles from './Views/Articles'
import Commande_Ok from './Views/Commande_Ok'
import Commandes from './Views/Commandes'
import GestionAchats from './Views/GestionAchats'
import GestionAdmin from './Views/GestionAdmin'
import GestionArticles from './Views/GestionArticles'
import HistoriqueCmd from './Views/HistoriqueCmd'
import Paiement from './Views/Paiement'

function App() {




  return (
    <div className="App">
       <Header_nav  /> 

      <Routes>
       
        <Route path='/log' element={<Log />}></Route>
        <Route path='/commande-ok' element={<Commande_Ok />} ></Route> 
         <Route path='/paiement' element={<Paiement />} ></Route>
         <Route path='/historique-commande' element={<HistoriqueCmd />} ></Route> 
          <Route path='/articles' element={<Articles />} ></Route> 
         <Route path='/commandes' element={<Commandes />} ></Route> 
         <Route path='/gestion-achats' element={<GestionAchats />} ></Route> 
         <Route path='/gestion-articles' element={<GestionArticles />} ></Route> 
         <Route path='/gestion-admin' element={<GestionAdmin />} ></Route> 
      </Routes>

      <Footer /> 
    </div>
  );
}

export default App;
