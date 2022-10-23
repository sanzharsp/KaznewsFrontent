import React from 'react';
import axiosApiInstance from '../../components/API/auth-header'
import url from '../../components/backend-server-url'
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { Backdrop } from '@mui/material';
import './Profile.css'
import Logout from '../../Pages/Auth/LogOut'

import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UserPost from '../Profile/UserPost'
import PersonIcon from '@mui/icons-material/Person';


const Profile=()=>{



    const[profile,setProfile]= useState([])
    const[Loading,setLoading] = useState(true)
    useEffect(()=>{
   
          axiosApiInstance.get(`${url.baseUrl}${url.Profile.profile}`)
          .then(res => {
            const post = res.data;
        
            
            setProfile([post]);
            setLoading(false);

          
          }).catch(err => {
            console.log(err)
  
          })
        
  
      },[])
    return(
 
      Loading
      ?
      <Container>
      <Backdrop
  sx={{ color: '#fff'}}
  open={true}
  onClick={Loading}

>
  <CircularProgress color="inherit" />
</Backdrop>
      </Container>
      :
     
        profile.map(profile =>
          <Container>
          
          <Card >
          <CardActionArea>
            
            <CardContent>

              <Typography gutterBottom variant="h5" component="h2"><PersonIcon color="primary" /> {profile.username} </Typography>
              <Divider variant="middle" />
              <Typography variant="body2" color="textSecondary" component="p">
              <Typography variant="body2" color="textSecondary" component="p"> Имя:{profile.first_name} </Typography>
              <Typography variant="body2" color="textSecondary" component="p">Фамилиия:{profile.last_name}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Отчество: {profile.surname}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Дата создания профиля:{profile.created_at}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">email:{profile.email} </Typography>

              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Logout/>
          </CardActions>
        </Card>
        <UserPost/>

            </Container>
            

        )
       
        
    );
}

export default Profile