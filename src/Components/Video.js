import React from 'react'
import '../styles/Video.css';
import ReactPlayer from 'react-player'

import Video1 from '../img/angel.mp4'
import Video2 from'../img/atardecer.mp4'
import Video3 from '../img/ring.mp4'
import Video4 from '../img/moda.mp4'
import lemom65 from '../img/lemom65.jpeg'


function Video() {
    return (
        
    
    
    <div className='video1'>

        <div className='wave-video' ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className='wave-video1'>
            <path d="M-16.08,26.14 C125.56,113.97 280.76,-37.00 514.95,41.94 L500.00,0.00 L0.00,0.00 Z" className='wave-video2'></path>
            </svg>
        </div>



        
            <img src={lemom65} className="img123" data-aos="fade-up-left"></img>
        
    </div>          
    )
}
export default Video; 




