import axios from 'axios';





  
    const axiosInterceptor =axios.interceptors.response.use(
        
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
         
              return config;
              
              
          }, 
          error => {
  if (error.response.status === 401) {
  
axios.post('http://127.0.0.1:8000/api/v1/login/refresh/',
{refresh:localStorage.getItem('refresh'),})
.then(response => {
  console.log("access before",localStorage.getItem('access'))

localStorage.setItem("access",response.data.access);
localStorage.setItem("refresh",response.data.refresh);


error.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;

      
      
  
}

)
return error;
  }else {
    return Promise.reject(error);
}
  
}
         
        );
   






export default axiosInterceptor
// Set config defaults when creating the instance


