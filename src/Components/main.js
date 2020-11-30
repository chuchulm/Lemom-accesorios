import React from 'react'
import '../styles/main.css';
import lemom100 from '../img/logoLemomTransparente-03.png'
import lemom101 from '../img/logolemom4Portafolio.jpeg'
import lemomblanca9 from '../img/lemomblanca9.jpg'
import lemomblanca11 from '../img/lemomblanca11.jpg'
import lemom13 from '../img/lemom13.jpeg'
import lemom5 from '../img/lemom5.jpeg'
import lemom7 from '../img/lemom7.jpeg'
import lemom2003 from '../img/lemom2003.jpg'

import video from '../img/videolemom.webm';
import Video4 from '../img/moda.mp4'





function Main(){
    return(
        
            <section className="contenedor">
                    
                <div className="sobre-nosotros">
                    <div className="imgMain ">
                       <img src={lemomblanca11} className="imgMain1" data-aos="fade-right"/>
                       {/* <video src={Video4} autoPlay loop width='800px' height='400px'></video> */}
                    </div>
                </div>


                <div className="contenido-textos">
                    <div className="contenido-texto">
                        <h3>Lemom</h3>
                        <p>En Lemom pensamos en la comidad de las mujeres que les gusta lucir unicas. Las bandanas brindan esa comodidad para el dia a dia en diferentes labores que desenpeña la mujer y dan un toque femenino como ninguna otra prenda.  </p>
                        <p> Las Bandanas son fabricadas a mano y echas con las mejores telas y materiales que se pueden coseguir en el mercado. Cada bandana que fabricamos tiene un toque unico que las distinguen del resto.</p>
                    </div>
                </div>
                        
            </section>
                

        
                  
    )
}
export default Main;










/*

<video className="video-about-us" autoplay  controls loop audio>
                              <source src={video} type="video/mp4"></source>
                            </video>





/*








*/
