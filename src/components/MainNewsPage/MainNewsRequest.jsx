import MainNews from './MainNewsPage'
import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import '../API/getpostmainload.css'
import ServerError from '../Error/error'
import url from '../backend-server-url'
import Footer from '../footer/footer'
import './MainNewsPage.css'

import {

  Link,
 
  
} from "react-router-dom";




function MainNewsRequest(){

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


  const scrollHandler=(e)=>{
   
      if (e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100 && localStorage.getItem('next')!='null'){

      
          setfetching(true);
        }
      }


    return (
      <div>
      
 
      <div  className="Container">
      <div className="container_about">
      <h1 >Наши главные новости</h1>
      
      
      </div>
     
      

      { 
        error
        ?

    <ServerError title={" Ошибка сервера"} error_text={"Сервер не отвечает на запросы. Если вы увидели это сообщение то можете перезагрузить страницу.Если не помогло напишите нам"}/>
      :
      

      
         loading
        ? <div className="box-loading -white"/>
    
        
       
     
        : DataLatesNews.map(posts => 

        <MainNews key={posts.id} category={posts.category} id={posts.id}  image={posts.image1} title={posts.title} content_text={posts.context} image1={posts.image1} author={{"Author_user":posts.user.username,"author_first_name":posts.user.first_name,"author_last_name":posts.user.last_name}} published_date={posts.date_add}/>

     
    
     
      
)}

 <Footer/>
      </div>

      
      </div>
    )
  }

export default MainNewsRequest;