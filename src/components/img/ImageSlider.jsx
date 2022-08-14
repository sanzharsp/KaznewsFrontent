



import SimpleImageSlider from "react-simple-image-slider";
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
    
      <div>


      <SimpleImageSlider
        width="80%"
        height={504}
        images={arrayImage}
  
        showBullets={true}
        showNavs={true}
      />
   
 
    </div>
     
    )
}



export default Slideshow;