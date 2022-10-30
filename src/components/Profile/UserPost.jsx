import Button from '@mui/material/Button';
import axiosApiInstance from '../API/auth-header'
import url from '../backend-server-url'
import {useState,useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import Posts from "../API/posts_request"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EditOffTwoToneIcon from '@mui/icons-material/EditOffTwoTone';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import './Profile.css'
import Stack from '@mui/material/Stack';


const UserPost=()=>{
    let navigate = useNavigate();
    const [Loading, setLoading] = useState(false); // загрузка в серевер данные
    const[Error,setError]=useState(false);
    const[Data,setData] = useState([]);
    const[lenght,setLenght]=useState(false);
   const Redux = () =>{

    navigate("/redactor", { replace: true });
   }
    

    useEffect(() =>{

        setLoading(true);
        axiosApiInstance.get(`${url.baseUrl}${url.Profile.userpost}`,{refresh_token:localStorage.getItem('refresh'),}
        ).then((res)=>{
         
            setLoading(false);
            setData(res.data);
            console.log([res.data[0]])
            if (res.data[0] === undefined) setLenght(false);
            else setLenght(true);

            
      
      
    
        }).
        catch((error)=>{

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
        lenght
        ? Data.map(postlist=>
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
         
        
        :<Container >
        
            <Card variant="outlined"> 
                <Container >
                <Stack  spacing={2}>
                <EditOffTwoToneIcon className="center_icons" sx={{ fontSize: 40}}/>  
                <h2 className="center" >У вас нет записей </h2>
                <Alert severity="info">
                <AlertTitle>Редакция</AlertTitle>
                Если вы напишите пост то он будет расмотрен администратором от — <strong> 2 часов до 1 дня!</strong>
                </Alert>
                <Button variant="outlined" className="center"  onClick={Redux} >Написать пост</Button>
                </Stack>
                </Container>
            </Card>
        </Container>
       
    }
        </>

    );
}

export default UserPost