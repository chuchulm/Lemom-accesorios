import React from 'react'
import '../styles/carousel.css';
import lemom9 from '../img/lemomblanca9.jpg';
import lemom10 from '../img/lemomblanca10.jpg';
import lemom11 from '../img/lemomblanca11.jpg';

import logoLemomp from '../img/logolemom4Portafolio.jpeg';
import logoLemom from '../img/logoLemom.jpeg';





function Carousel(){

  
     

  return(
        <>
    
    
    
    <div className="fondo1">
    {/* <img src={logoLemomp} className="logoPortafolio" alt="..."/>
    <img src={logoLemom} className="logoPortafolio" alt="..."/>
    <img src={logoLemomp} className="logoPortafolio" alt="..."/> */}
       

      



         <div className="lemom1">
      <section className="doraoparty" >

            <div className='waveCarousel3' ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className='waveCarousel4'>
            <path d="M-16.08,26.14 C125.56,113.97 280.76,-37.00 514.95,41.94 L500.00,0.00 L0.00,0.00 Z" className='waveCarousel5'></path>
            </svg>
        </div>


                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={lemom9} className=" dorao" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={lemom10} className=" dorao" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={lemom11} className=" dorao" alt="..."/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
               
                
    
      </section>
           
      </div>
    </div>

        </>
    )
}
export default Carousel;