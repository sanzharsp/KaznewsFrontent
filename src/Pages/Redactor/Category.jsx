import TextField from '@mui/material/TextField';
import React, {useState  } from "react";
import PreViewImage from '../../images/PreView.png'
import PostListItem from '../../components/API/getpost'


const CategoryInput=(props)=>{
    const [CategoryName, setCategory] = useState('');
    props.formData.append('category', CategoryName);
    var now = new Date().toLocaleString()
    return(
      <div className="outer" >
      <span className="inner" >
        <TextField
      
        id="outlined-uncontrolled"
        label="Категория поста"
        style={{  width: "70%"}}
        value={CategoryName}
        onChange={(event)=> setCategory(event.target.value)}
      
        
      />
      <h4 className='error'>{props.error}</h4>

      <div className="container_about" style={{textAlign: 'center'}}>

      <h4>Визуальное отоброжение на сайте</h4>
    
    
      </div>
     
    <PostListItem 
    category={CategoryName} 
    image={PreViewImage}  
    title={props.contentEdit1}  
    content_text={props.contentEdit2} 
    author={{"Author_user":localStorage.getItem('user'),
    "author_first_name":localStorage.getItem('first_name'),
    "author_last_name":localStorage.getItem('last_name')}} 
    published_date={now}/>

    </span>
    </div>
    )
}

export default CategoryInput;