
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './LinkToPost.css';
import Slideshow from '../img/ImageSlider'
import url from '../backend-server-url'
import { useParams } from "react-router-dom";
import Footer from '../footer/footer';

let baseurl = url.baseUrl
let url_get_data=url.url_get_data



/* Загрузка определенного поста по id*/



 const LinkToPost =() => {
  const [post, setPost] = useState([])
  let {id} = useParams();
useEffect(()=>{ 
    
    axios.get(`${baseurl}${url_get_data}${id}`)
      .then(res => {
        const post = res.data;
        setPost( post );
     
      
      })

 },[])


    return (
      
      <div className="content">
      { post.map(posts =>
        <div key={posts.id}>
        <div className="content-title" dangerouslySetInnerHTML={{ __html: posts.title }} />
        
        <Slideshow baseurl={baseurl} image1={`${baseurl}${posts.image1}`} image2={`${baseurl}${posts.image2}`} image3={`${baseurl}${posts.image3}`} />
      

           <div className="post">
         
              <div className="post-content">
       
        
                <div dangerouslySetInnerHTML={{ __html: posts.content_text }}/>
                <span className="post-date"><i className="fa fa-clock-o"></i>{posts.published_date}</span>
       
            
              </div>
              
            </div>
        
   
        <Footer/>
        </div>
        
    )}
       

      </div>
        
      
    )
  
}



export default LinkToPost;