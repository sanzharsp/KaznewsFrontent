
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './LinkToPost.css';
import Slideshow from '../img/ImageSlider'
import url from '../backend-server-url'
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';
import Footer from '../footer/footer';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';



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
      <>
      <Container>
      { post.map(posts =>
        <div key={posts.id}>
        <div className="content-title content" dangerouslySetInnerHTML={{ __html: posts.title }} />
        <div className="content">
        <Slideshow  baseurl={baseurl} image1={`${baseurl}${posts.image1}`} image2={`${baseurl}${posts.image2}`} image3={`${baseurl}${posts.image3}`} />
        </div>
              
          <Card variant="outlined">
         
          <Container>
       
        <CardContent>
                <div dangerouslySetInnerHTML={{ __html: posts.content_text }}/>
                </CardContent>
                </Container>
          
              
                </Card>
         
                </div>
       
        
    )}
   
 
    </Container>
    <Footer/>
    </>
        
      
    )
  
}



export default LinkToPost;