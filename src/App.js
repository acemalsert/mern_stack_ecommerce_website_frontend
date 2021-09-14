import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/Dashboard/Dashboard';
import CartDetail from './components/CartDetail/CartDetail';
import Footer from './components/Footer/Footer';
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Login from "./components/Login/Login";



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

          <Route path="/hakkimizda">
          <About/>
          </Route>

          
        </Switch>
        
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
