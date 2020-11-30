import React from 'react'
import {Link} from "react-router-dom"
import '../styles/header.css';
import logoLemom from '../img/logoLemomTransparente-03.png';

function Header(){

    return(

        
      
        <header>
            
            <div className="container2">
              
                    <div>
                        <img src={logoLemom} alt="" className="logoHeader img-fluid logo animate__animated animate__rollIn animate__slow	2s"></img>
                    </div>
                   
           
                    <div className=" nav cabecera  animate__animated animate__bounceInRight animate__slow	2s">
                    <nav>
                          <Link to="/" className='nav-link active' >Inicio</Link>
                          <Link to="/bandanas" className='nav-link'>Bandanas</Link>
                          {/* <Link to="/accesorios" className='nav-link'>Accesorios</Link> */}
                        </nav>
                    </div>

                  

                    <div className='wave10' >
                      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='wave20'>
                         <path d="M-52.20,152.45 C192.15,155.42 276.24,-25.16 511.00,74.50 L500.00,0.00 L0.00,0.00 Z" className='wave30'>
                          </path>
                      </svg>
                    </div>
              
              
                     
                    <div className="wave" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
                      <path d="M-5.36,129.77 C140.24,34.03 345.65,169.23 529.36,115.95 L500.00,150.00 L0.00,150.00 Z" className="wave2"></path>
                      </svg>
                    </div>


                    {/* <div className="wave" >
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
                           <path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                            className="wave2"></path>
                       </svg>
                    </div> */}


              
            </div>

        </header>
      
        

                
       


     
    )
}

export default Header;







/*
import React from 'react'
import{BrowserRouter,Link,Route} from 'react-router-dom'


function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="cabecera">
            <Link to="/">COMPRAR</Link>
            
          </div>
          <div className="menu">
            <Route exact path="/">
             INICIO   
            </Route>
            <Route exact path="/inicio">
              <div>asdadsas</div>
            </Route>
            <Route path="/bandanas">
              LIsta de bandanas
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;




<section className="textos-header sm-lg">
                  <h1></h1>
                  <h2></h2>
                </section>

            <div className="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
        
*/