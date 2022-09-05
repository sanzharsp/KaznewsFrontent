import Carousel from 'react-material-ui-carousel'
import './Slider.css'
/*Слайдер для изображений поста */

const Slideshow = (props) => {

const arrayImage=[];
  if(props.image1 !== `${props.baseurl}${null}`) {
    arrayImage.push({"url":props.image1});
  }
  if(props.image2 !== `${props.baseurl}${null}`){
    arrayImage.push({"url":props.image2});
  }
  if(props.image3 !== `${props.baseurl}${null}`){
    arrayImage.push({"url":props.image3});
  }


    return (
    <div className="container_slider">
      <Carousel 
      navButtonsAlwaysVisible={true}
      className="carusels"
      cycleNavigation={true}
      swipe={true}
      indicators={false}
   
      >

    
      {arrayImage.map(image => 
      <div>
    <img className="slider" src={image.url}/>
    </div>
      )
      }
      </Carousel >
      </div>


 

     
    )
}



export default Slideshow;