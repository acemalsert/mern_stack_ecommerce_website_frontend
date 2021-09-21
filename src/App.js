import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import React, { useContext } from 'react'
import './App.css';
import { AuthContext } from './context/AuthContext'
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/Dashboard/Dashboard';
import CartDetail from './components/CartDetail/CartDetail';
import Footer from './components/Footer/Footer';
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile.jsx"




function App() {
  return (
   

  
    <Router>

    <div className="App">
      
     <Navbar></Navbar>

     <Switch>
          <Route path="/kayitol">
          <Register/>
          </Route>

          <Route path="/girisyap">
          <Login/>
          </Route>
          <Route path="/urunler">
            <Dashboard/>
          </Route>
          <Route path="/kartdetayi">
          <CartDetail/>
          </Route>

          <Route exact path="/hakkimizda">
          <About/>
          </Route>

          <Route exact path = "/profil"> 
                        <Profile/>
                    </Route>

          <Redirect to="/urunler "/>
          
        </Switch>
        
        <Footer/>
    </div>
    </Router>

    
  );
}

export default App;
