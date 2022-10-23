import Button from '@mui/material/Button';
import axiosApiInstance from '../API/auth-header'
import url from '../backend-server-url'
import {useState,useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import Posts from "../API/posts_request"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


const UserPost=()=>{
    const [Loading, setLoading] = useState(false); // загрузка в серевер данные
    const[Error,setError]=useState(false);
    const[Data,setData] = useState([]);
   
    

    useEffect(() =>{

        setLoading(true);
        axiosApiInstance.get(`${url.baseUrl}${url.Profile.userpost}`,{refresh_token:localStorage.getItem('refresh'),}
        ).then((res)=>{
         
            setLoading(false);
            setData(res.data);
      
       
    
        }).
        catch((error)=>{
            console.log(error);
            setLoading(false);
            setError(true);
            
          
        })
    
    
    },[])
    
    return(
        Loading
        ?
        <Backdrop
        sx={{ color: '#fff'}}
        open={true}
        onClick={Loading}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      :
        Error
        ?
        <div>
        <div>ERORR</div>
        </div>
        :
        <>  
        <div  className="Container">
        <div className="container_about">
        <h2 ><LocalFireDepartmentIcon color="primary"/>Ваши редакций <LocalFireDepartmentIcon color="primary"/></h2> 
        </div>
        </div>
        {
        Data.map(postlist=>
            <Posts key={postlist.id} 
            category={postlist.category}
            id={postlist.id}  
            image={postlist.image1} 
            title={postlist.title}
            content_text={postlist.context} 
            image1={postlist.image1}
            author={{"Author_user":postlist.user.username,"author_first_name":postlist.user.first_name,"author_last_name":postlist.user.last_name}} 
            published_date={postlist.date_add}
            published = {postlist.published}
            />
            
            )
        }
        </>

    );
}

export default UserPost