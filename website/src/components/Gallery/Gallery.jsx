import React from 'react'
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css'
import gallery01 from '../../images/gallery01.png'
import gallery02 from '../../images/gallery02.png'
import gallery03 from '../../images/gallery03.png'
import gallery04 from '../../images/gallery04.png'


const Galleryimages = [gallery01,gallery02, gallery03, gallery04]
const Gallery = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const {current} = scrollRef;
        if(direction == 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }
  return (
 
      <div className="app__gallery">
        <div className="app__gallery-content">
            <h1>Photo gallery</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur odit sit vel voluptate at non laboriosam ex voluptatem, debitis ab. Amet sunt hic aliquid nam unde recusandae, adipisci dolorem tempora?</p>
            <button type="button" className='custom__button'>View More</button>
        </div>
        <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
                {Galleryimages.map((image,index) => (
                    <div className="app__gallery-images-card" key={'gallery_image-${index+1}'}>
                        <img src={image} alt="gallery-image" />
                        <BsInstagram className='gallery_img-icon' />
                    </div>
               ))}
            </div>
            <div className="app__gallery-arrows">
                <BsArrowLeftShort className="arrow_icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="arrow_icon" onClick={() => scroll('left')} />

            </div>
        </div>
      </div>

  
  );
}

export default Gallery;
