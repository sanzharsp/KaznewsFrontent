/*Компонент для изображения */

const Img = (props) => {


    return(
        <div>
        
        <img
        src={props.lostImage}
        alt="jane-doe"
        loading="lazy"
        className={props.imagestyle}
      />

      
        </div>
       
    )
}



export default Img;