

import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import './getpostmainload.css'
import ServerError from '../Error/error'
import url from '../backend-server-url'
import {

    Link,
   
    
  } from "react-router-dom";




function PostListItem(){

const[DataLatesNews,setDataLatesNews]=useState([]);
const[currentPage,setcurrentPage]=useState(1);
const[fetching,setfetching]=useState(true);
const[loading,setloading]=useState(true);
const[error,seterror]=useState(false);




useEffect(() =>{
if (fetching){
axios.get(`${url.baseUrl}${url.lates_news}${currentPage}`)
.then(response=>{
    localStorage.setItem('next',response.data.next);
    setDataLatesNews([...DataLatesNews, ...response.data.results]);
    setloading(false);
    seterror(false);
    setcurrentPage(prevState=>prevState + 1);
    
 
   

}
).catch((error)=>{

  if (error.response.status!=404){
seterror(true);
  }
}).finally(()=>setfetching(false))
}
},[fetching])


useEffect(() =>{

    document.addEventListener("scroll",scrollHandler)
  

    return function(){
    document.removeEventListener("scroll",scrollHandler)
  }



},[])
console.log(DataLatesNews)

  
    const scrollHandler=(e)=>{
     
        if (e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100 && localStorage.getItem('next')!='null'){

        
            setfetching(true);
          }
        }

      


    return (

      <div className="Container">
      { 
                error
                ?
        
            <ServerError title={" Ошибка сервера"} error_text={"Сервер не отвечает на запросы. Если вы увидели это сообщение то можете перезагрузить страницу.Если не помогло напишите нам"}/>
              :
              
        
              
                 loading
                ? <div className="box-loading -white"/>
            
                
                
               
             
                :DataLatesNews.map(postlist=>
            
            <section className="list-content" key={postlist.id}>
  
            <div className="post-slide">
              <div className="post-img">
                <img src={postlist.image1} alt=""/>
                <a  className="over-layer"><i className="fa fa-link"></i></a>
              </div>
              <div className="post-content">
                <h3 className="post-title">
                  <a href="#"><div dangerouslySetInnerHTML={{ __html: postlist.title }}/></a>
                </h3>
                <h4>#{postlist.category}|{postlist.user.username}</h4>
                <p className="post-description"><div dangerouslySetInnerHTML={{ __html: postlist.context }}/></p>
                <span className="post-date"><i className="fa fa-clock-o"></i>{postlist.date_add}</span>
                <Link  to={`/post/${postlist.id}`} className="read-more">Читать</Link>
              </div>
              
            </div>
           
  </section>
            
        )}
      
        </div>

    )
}

export default PostListItem;
