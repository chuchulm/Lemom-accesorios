import React from 'react'
import '../styles/Accesorios.css'
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import {Link} from "react-router-dom"
import lemom1 from '../img/lemomAccesorio1.jpg';
import lemom2 from '../img/lemomAccesorio02.jpg';
import lemom3 from '../img/lemomAccesorio03.jpg';
import lemom11 from '../img/lemom11.jpeg';
import lemom7 from '../img/lemom7.jpeg';
import lemom13 from '../img/lemom13.jpeg';
import NavBar from './NavBar'
import Lightbox from './Lightbox1'



class Accesorios extends React.Component{



    
    

    render(){

        const accesorio = [lemom1,lemom2,lemom3, lemom11,lemom7,lemom13];



        return(
            <>
              <NavBar/>
              <div>
                <RViewer imageUrls={accesorio}>
                
                    <div className='card45'>
                        {accesorio.map( (img, index )=> (
                            
                            <RViewerTrigger index={index}>
                         <div className="card card678" key= {img} >
                            <img src= { img } className="card-img-top imgcard12" alt= 'bandanas'/>
            
                            <div className="card-body">
                              <h6 className="card-title titulocard123">Bandanas de alambre</h6>
                             
                              
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
}
export default Accesorios;