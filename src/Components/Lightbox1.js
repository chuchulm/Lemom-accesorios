import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import lemom1 from '../img/lemomAccesorio1.jpg';
import lemom2 from '../img/lemomAccesorio02.jpg';
import lemom3 from '../img/lemomAccesorio03.jpg';
import lemom11 from '../img/lemom11.jpeg';
import lemom7 from '../img/lemom7.jpeg';
import lemom13 from '../img/lemom13.jpeg';
 
const images = [lemom1, lemom2, lemom3, lemom11,lemom7,lemom13];
 
class Lightbox1 extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
export default Lightbox1;