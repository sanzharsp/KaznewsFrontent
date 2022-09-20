import AvatarString from '../../utils/StringAvatar/StringAvatar'
import Avatar from '@mui/material/Avatar';
import { useState,useEffect } from 'react';
import axiosApiInstance from '../../components/API/auth-header'
import url from '../../components/backend-server-url'
import {Link} from "react-router-dom";


const InfoProfile=()=>{

    const [IsLogin,setIsLogin]=useState(false);
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');

    useEffect(()=>{
      if (localStorage.getItem("refresh")!== null & localStorage.getItem("refresh")!== undefined )
      {
        axiosApiInstance.get(`${url.baseUrl}${url.Profile.info}`)
        .then(res => {
          const post = res.data;
      
          setFirstName(post.first_name);
          setLastName(post.last_name);
          setIsLogin(true);
        
        }).catch(err => {
          setIsLogin(false);

        })
      }

    },[])

    return(
        <div>

        {
            IsLogin
          ?
          <Link  to={`profile`} className="menu-item tegA">
  
          <Avatar {...AvatarString(`${FirstName} ${LastName}`)} />
          
          </Link>
          :
          <Link  to={"login"} className="menu-item tegA">
  
          <Avatar  />
          
          </Link>
          }

          </div>
    );
}

export default InfoProfile