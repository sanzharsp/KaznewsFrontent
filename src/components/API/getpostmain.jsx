
import PostListItem from './getpost'
import React from 'react';
import axios from 'axios';
import './getpostmainload.css'
import ServerError from '../Error/error'
import url from '../backend-server-url'


/*основной компонент для загрузки данных и оброботке ошибок */

let baseurl =url.baseUrl
let url_get_data=url.lates_news
export default class PostList extends React.Component {
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
      
      <div  className="Container">

     
      

      { 
        this.state.error
        ?

    <ServerError title={" Ошибка сервера"} error_text={"Сервер не отвечает на запросы. Если вы увидели это сообщение то можете перезагрузить страницу.Если не помогло напишите нам"}/>
      :
      

      
         this.state.loading
        ? <div className="box-loading -white"/>
    
        
       
     
        : this.state.post.map(posts => 
       
        <PostListItem key={posts.id} category={posts.category} id={posts.id} baseurl={baseurl} image={baseurl+posts.image1}  title={posts.title}  content_text={posts.context} image1={posts.image1} author={{"Author_user":posts.user.username,"author_first_name":posts.user.first_name,"author_last_name":posts.user.last_name}} published_date={posts.date_add}/>

     
    
     
      
)}


      </div>
        
      
    )
  }
}



