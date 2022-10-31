import VerifiedIcon from '@mui/icons-material/Verified';
import './getpost.css';
import Divider from '@mui/material/Divider';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axiosApiInstance from '../API/auth-header'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import url  from '../backend-server-url'
import {

    Link,
   
    
  } from "react-router-dom";
  


const Posts= (props) => {
  let navigate = useNavigate();
  const[like,SetLike]=useState(props.likes);
  const[bool,setBool]=useState(false);
  useEffect(() =>{
    if (props.value === 'Unlike') setBool(true);
    else  setBool(false);
},[])
 

const LikeAdd =(id)=>{
  axiosApiInstance.post(`${url.baseUrl}${url.Post.like}`,{
    post: id,
})
  .then(res => {
    const post = res.data;
    setBool(post.is_like)
    SetLike(post.post_like)
   
  }).catch(err => {
    if( err.response.status === 401)  navigate("/login", { replace: true });
    else console.log(err);
  })

}

 
    return(
      
<section className="list-content" key={props.id}>

            <div className="post-slide">
              <div className="post-img">
                <img src={props.image} alt=""/>
                <a  className="over-layer"><i className="fa fa-link"></i></a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#"><div dangerouslySetInnerHTML={{ __html: props.title }} />{props.published
                    ?
                    <>
                    <h6 style={{ color:'green'}}>Допущено к публикаций<VerifiedIcon/></h6>
                    <Divider variant="middle" />
                    </>
                    
                   
                    :
                    <></>
                    }</a>
                </h3>
                <h4>#{props.category}|Автор:{props.author.Author_user}</h4>
                <p className="post-description"><div dangerouslySetInnerHTML={{ __html: props.content_text }}/></p>
                <span className="post-date"><i className="fa fa-clock-o"></i>{props.published_date}</span>
                <Link  to={`/post/${props.id}`} className="read-more">Читать</Link>
                
            
                    <Stack direction="row" spacing={2}>
                    {
                 
                     bool 
                     ?
                    <Button variant="outlined" startIcon={<FavoriteBorderTwoToneIcon />} onClick={() =>LikeAdd(props.id)}/>
                    :
                    <Button color="error" variant="outlined" startIcon={<FavoriteBorderTwoToneIcon />} onClick={() =>LikeAdd(props.id)}/>
                    
              
                    }
                        <div>{like}</div>

                    </Stack>
       
              </div>
              

            </div>
          
  </section>
  


    )
}



export default Posts