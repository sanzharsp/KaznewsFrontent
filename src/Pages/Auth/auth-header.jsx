import axios from 'axios';

import url from '../../components/backend-server-url'

import { useNavigate } from "react-router-dom";

 const setAuthToken = () => {
  
    axios.interceptors.response.use(
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
         
              return config;
              
          },
          error => {
            Promise.reject(error)
        });
        axios.interceptors.response.use((response) => {
          return response
       },
        function (error) {
         
          
            let navigate = useNavigate();// Redirect
            const originalRequest = error.config;
            if (error.response.status === 401 && originalRequest.url === 
              `${url.baseUrl}${url.Update.refresh}`) {
                  navigate('/login');
                       return Promise.reject(error);
                   }
            if (error.response.status === 401 && !originalRequest._retry) {
         
                originalRequest._retry = true;
                return axios.post(`${url.baseUrl}${url.Update.refresh}`,{refresh :localStorage.getItem("refresh")})
                    .then(res => {
                        if (res.status === 201) {
                            // 1) put token to LocalStorage
                            localStorage.setItem("access",res.data.access);
                            localStorage.setItem("refresh",res.data.refresh);
         
                            // 2) Change Authorization header
                            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
         
                            // 3) return originalRequest object with Axios.
                            return axios(originalRequest);
                        }
                    })
                    
            }
         
            // return Error object with Promise
            return Promise.reject(error);
        }
      );

      

}




export default setAuthToken
// Set config defaults when creating the instance
