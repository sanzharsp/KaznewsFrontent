import axios from 'axios';

import url from '../../components/backend-server-url'

import { useNavigate } from "react-router-dom";


  
    const axiosInterceptor =axios.interceptors.response.use(
        
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
         
              return config;
              
              
          },
          error => {
        
       
            
       

            const originalRequest = error.config

            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true
                
                return axios
                  .post(`${url.baseUrl}${url.Update.refresh}`, {
                    refresh: localStorage.getItem("refresh"),
                  })
                  .then(res => {
                    if (res.status === 201) {

                      localStorage.setItem("access",res.data.access);
                      localStorage.setItem("refresh",res.data.refresh);
                      axios.defaults.headers.common['Authorization'] =
                        'Bearer ' +localStorage.getItem("access")
                      return axios(originalRequest)
                    }
                  })
              }
              return Promise.reject(error)
        }
         
        );
   






export default axiosInterceptor
// Set config defaults when creating the instance


