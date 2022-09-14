import axios from 'axios';
import url from '../../components/backend-server-url';






const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
   config => {
    
    config.headers = { 
      'Authorization': `Bearer ${localStorage.getItem('access')}`
     
    }
 
    return config;
  },
  error => {
   
   
    return Promise.reject(error)
      });

axiosApiInstance.interceptors.response.use(
  
   config => {

    config.headers = { 
      'Authorization': `Bearer ${localStorage.getItem('access')}`

    }
    return config;
  },
  error => {
  
    const originalRequest = error.config;
    
if (error.response.status === 401){


axios.post( `${url.baseUrl}${url.Auth.refresh}`,
{refresh:localStorage.getItem('refresh')}).then(response =>{

  localStorage.setItem('access',response.data.access)
})

return axiosApiInstance(originalRequest);
}
return Promise.reject(error)
  }
          
         
        );
   


export default axiosApiInstance;
