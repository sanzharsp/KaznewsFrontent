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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UserPost from '../Profile/UserPost'
import Stack from '@mui/material/Stack';
import Footer from '../footer/footer'
import { Box, Clock } from 'grommet';


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
              <Box gap='large'>
              <Box align='center' gap='medium'>
          
                <Box round='large' background='#2E2F45' pad='small'>
                  <Clock type='digital' size='large'   />
                </Box>
              </Box>
       
      
            </Box>
            <CardContent/>
           
      
     
              <CardContent/>
      
              {
        profile.map(profile =>
          
          <Stack spacing={5} >
          <Container>
          
          <Card >
    
  
       
            
            <CardContent>
        
  
            
            <CardContent>
            
            <Typography sx={{fontFamily:  "Segoe UI"}} gutterBottom variant="h5" component="h2"> {profile.username}  </Typography>
        
            <Divider variant="middle" />
       

          
            <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div" > Имя: {profile.first_name} </Typography>
       

         
            <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Фамилиия: {profile.last_name}</Typography>
    
            
      
            <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">email: {profile.email} </Typography>
            

         
            <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Отчество: {profile.surname}</Typography>
           

    
            <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Дата создания профиля: {profile.created_at}</Typography>
  
            <Typography sx={{fontFamily:  "Segoe UI"}} variant="h6" component="div">Прошло времени от создания 
       
            </Typography>
            </CardContent>
           
      
    

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