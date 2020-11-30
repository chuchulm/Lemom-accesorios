import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Bandanas from './Components/bandanas';
import Accesorios from './Components/accesorios';
import Lightbox1 from './Components/Lightbox1';


function Routes(){
    return(
       <Switch>
           <Route  exact path= "/" component ={Home}/>
           <Route  path= "/accesorios" component ={Accesorios}/>
           <Route  path= "/bandanas" component ={Bandanas}/>
           <Route  path= "/Lightbox" component ={Lightbox1}/>

       </Switch>
    );
}
export default Routes;



/*import Header from './Components/header';
import './styles/component.css';
import Main from './Components/main';
import Portafolio from './Components/Portafolio';
import Carousel from './Components/carousel';
import Carousel1 from './Components/carousel1';
import Sociales from './Components/estilos';
import Footer from './Components/footer';
import Iconos from './Components/iconos'
import Galeria from './Components/Galeria'

*/



/*<Header/>
       
       
       <Portafolio/>
       <Carousel/>
      
       <Sociales/>
       <Footer/>
       */