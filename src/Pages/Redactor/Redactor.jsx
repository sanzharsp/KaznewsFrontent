import React, {useState,useRef   } from "react";

import "./Redactor.css"

import url from '../../components/backend-server-url'

import setAuthToken from '../Auth/auth-header'

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import TextEditor from './TextEditor'

import ImageUpload from './ImageUpload'

import CategoryInput from './Category'

import MainNewsBoolean from './Checkbox'




export default function Redactor() {
  let formData = new FormData();// global FormData
  let navigate = useNavigate();// Redirect

  
  //editor
  const editor1= useRef(null), editor2 = useRef(null),editor3 = useRef(null);

  const [contentEdit1, setContent1] = useState("Start writing"),
        [contentEdit2, setContent2] = useState("Start writing"),
        [contentEdit3, setContent3] = useState("Start writing");

  const handleUpdateEdit1 = (event) => {
    const editorContent = event;
    setContent1(editorContent);
  }, handleUpdateEdit2 = (event) => {
    const editorContent = event;
    setContent2(editorContent);
  }, handleUpdateEdit3 = (event) => {
    const editorContent = event;
    setContent3(editorContent);
  };

//date parsing



// error message hooks
const [error, setMsg] = useState('');
//username
const username=localStorage.getItem('user')


const [errorUsername, setErrorUsername]=useState(''),
      [errorTitle, setErrorTitle,]=useState(''),
      [errorContext, setErrorContext]=useState(''),
      [errorImage1, setErrorImage1,]=useState(''),
      [errorImage2, setErrorImage2,]=useState(''),
      [errorImage3, setErrorImage3] = useState(''),
      [errorContent_text, setErrorContent_text] = useState(''),
      [errorMain_news, setErrorMain_news] = useState(''),
      [errorCategory, setErrorCategory] = useState('');
    
      
 const NewPostPub = async (e) => {
    e.preventDefault();
   

const configuration = {headers: {'content-type': 'multipart/form-data'}}    
formData.append('user', username);
formData.append('title', contentEdit1);
formData.append('context',contentEdit2);

formData.append('content_text', contentEdit3 );




  setAuthToken();
 


  try {
      await  axios.post(url.baseUrl+url.Auth.post,
        formData,configuration
        ).then(response => {
          


          navigate("/", { replace: true });
     
          
          });
  } catch (error) {
    
 
          if (error.response) {
            setMsg(error.response.data.detail);
            setErrorUsername(error.response.data.user);
            setErrorTitle(error.response.data.title);
            setErrorContext(error.response.data.context);
            setErrorImage1(error.response.data.image1);
            setErrorImage2(error.response.data.image2);
            setErrorImage3(error.response.data.image3);
            setErrorContent_text(error.response.data.content_text);
            setErrorMain_news(error.response.data.main_news);
            setErrorCategory(error.response.data.category);
            
         
      }
    }
    
  
  }
  return (

    

<div><section className="list-content" >
  


</section>

    <form  onSubmit={NewPostPub} className="form-login">

    <h4  className='error' >{error}</h4>

    <h4 className='error'>{errorUsername}</h4>
      <div className="container_about" style={{textAlign: 'center'}}>

      <h3>Пишем новый пост контент</h3>
    
    
      </div>

      <CategoryInput formData={formData} error={errorCategory} contentEdit1={contentEdit1} contentEdit2={contentEdit2} />
 
  

      <div className="container_about" style={{textAlign: 'center'}}>
      

      <h4>Наименования новости</h4>
    
    
      </div>
      <div className="outer" >
      <span className="inner" >
      <div style={{ border: "1px solid black",borderRadius: "10px", padding: '2px', minHeight: '400px'}}>

    <TextEditor editor={editor1} contentEdit={contentEdit1}  handleUpdateEdit={handleUpdateEdit1} />
    
    <h4 className='error'>{errorTitle}</h4>
      </div>
      </span>
      </div>

     
    
      <div className="container_about" style={{textAlign: 'center'}}>

      <h4>Краткое описание новости</h4>
    
    
      </div>
      <div className="outer" >
      <span className="inner" >
      <div style={{ border: "1px solid black",borderRadius: "10px", padding: '2px', minHeight: '400px' }}>
      <TextEditor editor={editor2} contentEdit={contentEdit2}  handleUpdateEdit={handleUpdateEdit2} />
      <h4 className='error'>{errorContext}</h4>
    </div>
    </span>
    </div>
  
    <div className="container_about" style={{textAlign: 'center'}}>

    <h4>Текст новости</h4>
  
  
    </div>
    <div className="outer" >
      <span className="inner" >
    <div  style={{ border: "1px solid black",borderRadius: "10px",padding: '2px', minHeight: '400px' }}>
    <TextEditor editor={editor3} contentEdit={contentEdit3}  handleUpdateEdit={handleUpdateEdit3} />
    <h4 className='error'>{errorContent_text}</h4>
  </div>
    </span>
    </div>

    <div className="container_about" style={{textAlign: 'center'}}>

    <h4>Обязательное изображение</h4>
  
  
    </div>
    <div className="outer" >
    <span className="inner" >
    

    <ImageUpload formData={formData} />

    <h4 className='error'>{errorImage1}</h4>
    <h4 className='error'>{errorImage2}</h4>
    <h4 className='error'>{errorImage3}</h4>
    </span>
    </div>

    
    <div className="container_about" style={{textAlign: 'center'}}>

    <h4>Пост в главные ?</h4>
  
  
 
 
    <MainNewsBoolean formData={formData} />
    <h4 className='error'>{errorMain_news}</h4>
    
    </div>

    <div className="outer" >
    <span className="inner" >
    <button className="login__submit" >Отправить пост</button>
    </span>
    </div>
 
    </form >



    </div>
    
  );
  
}