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
import Stack from '@mui/material/Stack';
import Footer from '../footer/footer'
import BorderColorIcon from '@mui/icons-material/BorderColor';

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
              <>

              <CardContent/>
      
              {
        profile.map(profile =>
          
          <Stack spacing={5} >
          <Container>
          
          <Card variant="outlined" >
      
            
            <CardContent>

          
            
              <Typography sx={{fontFamily:  "Segoe UI"}} gutterBottom variant="h5" component="h2"> {profile.username} <PersonIcon color="error" /> </Typography>
        
              <Divider variant="middle" />
              <CardContent/>

              <Card variant="outlined" >
              <CardContent>
              <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div" > Имя: {profile.first_name} </Typography>
              </CardContent>
              </Card>

              <Card variant="outlined" >
              <CardContent>
              <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Фамилиия: {profile.last_name}</Typography>
              </CardContent>
              </Card>
              
              <Card variant="outlined" >
              <CardContent>
              <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">email: {profile.email} </Typography>
              </CardContent>
              </Card>

              <Card variant="outlined" >
              <CardContent>
              <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Отчество: {profile.surname}</Typography>
              </CardContent>
              </Card>

              <Card variant="outlined" >
              <CardContent>
              <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Дата создания профиля: {profile.created_at}</Typography>
              </CardContent>
              </Card>
             

            </CardContent>
     
          <CardActions>
            <Logout/>
          </CardActions>
        </Card>
        <UserPost/>

            </Container>
    
            <Footer/>

            </Stack>
            

        )
              }
        </>
        
    );
}

export default Profile