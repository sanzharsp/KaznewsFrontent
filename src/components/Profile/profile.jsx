import axiosApiInstance from '../../components/API/auth-header'
import url from '../../components/backend-server-url'
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { Backdrop } from '@mui/material';
import './Profile.css'

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
       
	

            <div>{profile.username} {profile.first_name} {profile.last_name} {profile.surname} {profile.created_at} {profile.email} </div>
            </Container>

        )
       
        
    );
}

export default Profile