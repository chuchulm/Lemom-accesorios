import React from 'react'
import '../styles/bandanas.css';
import NavBar from './NavBar'
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import image from './BandanaJson' 
import IconoWhatsapp from './iconoWhatsapp'
import lemom21 from '../img/lemom21.jpeg';
import lemom22 from '../img/lemom22.jpeg';
import lemom23 from '../img/lemom23.jpeg';
import lemom24 from '../img/lemom24.jpeg';
import lemom25 from '../img/lemom25.jpeg';
import lemom26 from '../img/lemom26.jpeg';
import lemom27 from '../img/lemom27.jpeg';
import lemom28 from '../img/lemom28.jpeg';
import lemom29 from '../img/lemom29.jpeg';
import lemom30 from '../img/lemom30.jpeg';
import lemom31 from '../img/lemom31.jpeg';
import lemom32 from '../img/lemom32.jpeg';
import lemom33 from '../img/lemom33.jpeg';
import lemom34 from '../img/lemom34.jpeg';
import lemom35 from '../img/lemom35.jpeg';
import lemom36 from '../img/lemom36.jpeg';
import lemom37 from '../img/lemom37.jpeg';
import lemom38 from '../img/lemom38.jpeg';
import lemom39 from '../img/lemom39.jpeg';
import lemom40 from '../img/lemom40.jpeg';
import lemom41 from '../img/lemom41.jpeg';
import lemom42 from '../img/lemom42.jpeg';
import lemom43 from '../img/lemom43.jpeg';
import lemom44 from '../img/lemom44.jpeg';
import lemom45 from '../img/lemom45.jpeg';
import lemom46 from '../img/lemom46.jpeg';
import lemom47 from '../img/lemom47.jpeg';
import lemom48 from '../img/lemom48.jpeg';
import lemom49 from '../img/lemom49.jpeg';
import lemom50 from '../img/lemom50.jpeg';
import lemom51 from '../img/lemom51.jpeg';
import lemom52 from '../img/lemom52.jpeg';


const image2 = [ lemom21, lemom22, lemom23, lemom24, lemom25, lemom26, lemom27, lemom28, lemom29, lemom30, lemom31, lemom32, lemom33, lemom34, lemom35,
                 lemom36, lemom37, lemom38, lemom39, lemom40, lemom41, lemom42, lemom43, lemom44, lemom45, lemom46, lemom47, lemom48, lemom49, lemom50,
                 lemom51, lemom52]






function Bandanas(){


    

    
    return(
        <>
          <NavBar/>
          <IconoWhatsapp/>
          
          <div>
            <RViewer imageUrls={ image2 }>
            
                <div className='card12'>
                    {image.map( ( img, index  )=> (
                        
                        <RViewerTrigger index={ index }>
                     <div className="card card123" key= {img} >
                        <img src= { img.imagen } className="card-img-top imgcard" alt= 'bandanas'/>
        
                        <div className="card-body">
                    <h6 className="card-title titulocard">ID: {img.ID}</h6>
                    <h6 className="card-title titulocard"> Precio: {img.precio} $ </h6>
                         
                          
                        </div>
                    </div>
                    </RViewerTrigger>
                         ))}
                </div>
            </RViewer>
        </div>
            
        </> 
    )
}
export default Bandanas;





/*
function Bandanas(){
    return(
        <>
      <NavBar/>

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom17}></img>
                  <span>titulo1</span>
                  
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom14}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>   

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>    

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>    

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>   

        <div className="todo">
            <div className="containerD">
    
                <div className="box">
                  <img src={lemom10}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={lemom11}></img>
                   <span>titulo2</span>
                </div>
    
                 <div className="box">
                    <img src={lemom12}></img>
                    <span>titulo3</span>
                 </div>
    
                 <div className="box">
                     <img src={lemom13}></img>
                     <span>titulo4</span>
                </div>
            </div>
    
        </div>   
          
        </> 
    )
}
export default Bandanas;*/
