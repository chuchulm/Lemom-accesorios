import React from 'react'
import '../styles/footer.css'



function Footer(){
    return(
        
        <footer id="contacto">
        <div className=" footer-content">
            <div className="contact-us">
                <h2 className="brand">Lemom Accesorios</h2>
                <p>Hecho a mano en Venezuela</p>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/Lemom-accesorios-106325011124016" target="blank" className="social-media-icon">
                    <i className='bx bxl-facebook'></i>
                </a>
                <a href="https://www.instagram.com/lemom.accesorios/" target="blank" className="social-media-icon">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+584242613118&text=Bienvenidos%20a%20Lemom%20estamos%20para%20ayudarte" target="blank" className="social-media-icon">
                    <i className='bx bxl-whatsapp'></i>
                </a>
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-messenger'></i>
                </a>
                
            </div>

        </div>
        <div className="line"></div>

                 
    </footer>
    ) 
    
}
export default Footer;