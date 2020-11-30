import React, { useEffect } from 'react'
import '../styles/portafolio.css';
import imagePortafolio from './portafolioJson' 
import Aos from "aos"
import "aos/dist/aos.css"
import logo from '../img/logoLemomTransparente-03.png';



function Portafolio(){

   useEffect(() => {
      Aos.init({ duration: 2000});
      
   }, []);




   return(
   <section className="fondo">
      <div className="portafolio">
         <div className="contenedor1">
          {/* <img src={logo} alt="" className="logo2"></img> */}
            
               <div data-aos="fade-up"  className="galeria-port">

                 {imagePortafolio.map( ( img, index)=> (
                  <div className="imagen-port" key={index}>
                    <img src={img.imagen} alt=""/>
                  </div>
                      ))}

               </div>

         </div>

      </div>

   </section>

 )
}
export default Portafolio;


