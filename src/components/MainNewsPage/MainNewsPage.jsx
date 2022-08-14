
import '../API/getpost.css'

import {

    Link,
   
    
  } from "react-router-dom";
  


const MainNews = (props) => {
    let imageUrl=`${props.baseurl}${props.image}`;


 
    return(
      
<section className="list-content" key={props.id}>

            <div className="post-slide">
              <div className="post-img">
                <img src={imageUrl} alt=""/>
                <a  className="over-layer"><i className="fa fa-link"></i></a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#"><div dangerouslySetInnerHTML={{ __html: props.title }}/></a>
                </h3>
                <h4>#{props.category} {props.author.Author_user}</h4>
                <p className="post-description"><div dangerouslySetInnerHTML={{ __html: props.content_text }}/></p>
                <span className="post-date"><i className="fa fa-clock-o"></i>{props.published_date}</span>
                <Link  to={`post/${props.id}`} className="read-more">Читать</Link>
              </div>
              
            </div>
          
  </section>
  


    )
}



export default MainNews;