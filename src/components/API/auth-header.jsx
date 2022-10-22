import axios from 'axios';
import url from '../../components/backend-server-url';



const axiosApiInstance = axios.create();



axiosApiInstance.interceptors.request.use(
  
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
{
  refresh:localStorage.getItem('refresh')}
).then(response =>{

  localStorage.setItem('access',response.data.access)
  return axiosApiInstance(originalRequest);
}).catch (e=>{
if (e.response.data.code === "token_not_valid")
     
    window.location.replace("/login") ;
else  console.log(e);
 

});
}

return Promise.reject(error)
  }
          
         
        );
        
   


export default axiosApiInstance;
