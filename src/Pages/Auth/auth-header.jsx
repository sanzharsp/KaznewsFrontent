import axios from 'axios';

import url from '../../components/backend-server-url'

import { useNavigate } from "react-router-dom";


  
    const axiosInterceptor =axios.interceptors.response.use(
        
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
         
              return config;
              
          },
          error => {
            // Reject promise if usual error
            if (error.response.status !== 401) {
                return Promise.reject(error);
            }
            
      
        }
         
        );
   






export default axiosInterceptor
// Set config defaults when creating the instance



/*
      axios.interceptors.response.eject(axiosInterceptor );

            return axios.post(`${url.baseUrl}${url.Update.refresh}`, 
            {refresh:localStorage.getItem("refresh"),
            }).then(response => {
                localStorage.setItem("access",response.data.access);
                localStorage.setItem("refresh",response.data.refresh);
                error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access;
                return axios(error.response.config);
            }).catch(error => {
                let navigate = useNavigate();
                console.log(error)

            
                navigate("/login", { replace: true });
                return Promise.reject(error);
            }).finally(axiosInterceptor);

*/