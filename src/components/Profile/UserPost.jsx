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
import {observer} from 'mobx-react-lite'
import Counter from '../Mobx/ProfileRender/ProfileMobxRener'
import Images from '../../images/123734-modern-digital-advertise.gif'
import CardContent from '@mui/material/CardContent';


const UserPost = observer(()=>{
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
        catch(()=>{

            setLoading(false);
            setError(true);
            
          
        })
    
    
    },[Counter.delete])
    function handleDeleteElement (id) {
        axiosApiInstance.delete(`${url.baseUrl}${url.Post.post_delete}/${id}`,{
        })
          .then(res => {
            const post = res.data;
            console.log(post);
            Counter.trigger_delete();
        
      
           
          }).catch(err => {
            if( err.response.status === 401)  navigate("/login", { replace: true });
            else console.log(err);
          })
        }
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
      
        <Card >
        <CardContent>
        <h2 ><LocalFireDepartmentIcon color="primary"/>Ваши редакций <LocalFireDepartmentIcon color="primary"/></h2> 
        <img style={{
     
          display: "block",
          width: "50%",
          marginLeft:"auto",
          marginRight:"auto",
         }} src={Images} />

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
                likes={postlist.likes.length}
                value={postlist.value}
                delete ={handleDeleteElement}
                />
                
                )
             
            
            :
            
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
       
           
        }
        </CardContent>
        </Card>
   
        
        </div>
        </div>
        
        </>

    );
}
    )

export default UserPost