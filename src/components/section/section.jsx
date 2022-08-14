import './section.css'


/*Компоненнт для svg и about*/


const Section = (props) => {


    return(
        <div>
        <section className="hero" id="about">
        {props.img}
        {props.content}
        
        </section>
        </div>
       
    )
}



export default Section;