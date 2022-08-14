import MainNews from './MainNewsPage'
import React from 'react';
import axios from 'axios';
import '../API/getpostmainload.css'
import ServerError from '../Error/error'
import url from '../backend-server-url'
import Footer from '../footer/footer'
import './MainNewsPage.css'

/*основной компонент для загрузки данных и оброботке ошибок */

let baseurl =url.baseUrl
let url_get_data=url.main_news
export default class MainNewsRequest extends React.Component {
  state = {
    post: [],
    loading: true,
    error:false
  }


  componentDidMount() {
    
    axios.get(`${baseurl}${url_get_data}`)
      .then(res => {
        const post = res.data;
        this.setState({ post ,loading: false});
      })
      .catch(err => { 
  
        this.setState({ error:true});
      
      })
  }


  render() {

    return (
      <div>
      
      {this.state.post.map(posts => 


     
      


      <img className="image_main_news_page" src={baseurl+posts.image1}/>
      )}
      <div  className="Container">
      <div className="container_about">
      <h1 >Наши главные новости</h1>
      
      
      </div>
     
      

      { 
        this.state.error
        ?

    <ServerError title={" Ошибка сервера"} error_text={"Сервер не отвечает на запросы. Если вы увидели это сообщение то можете перезагрузить страницу.Если не помогло напишите нам"}/>
      :
      

      
         this.state.loading
        ? <div className="box-loading -white"/>
    
        
       
     
        : this.state.post.map(posts => 

        <MainNews key={posts.id} category={posts.category} id={posts.id} baseurl={baseurl} image={posts.image1} title={posts.title} content_text={posts.context} image1={posts.image1} author={{"Author_user":posts.user.username,"author_first_name":posts.user.first_name,"author_last_name":posts.user.last_name}} published_date={posts.date_add}/>

     
    
     
      
)}

 <Footer/>
      </div>

      
      </div>
    )
  }
}
