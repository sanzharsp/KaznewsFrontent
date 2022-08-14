import './about.css'





const About = (props) => {


    return(
        <div >  
       
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div className="bio animate__animated animate__shakeX">
        
        <h2 className="bio-title">{props.about}</h2>
       
  
        <p className="bio-text">

        {props.main_texts}
        
        </p>
      </div>

      </div>

    )
}



export default About;