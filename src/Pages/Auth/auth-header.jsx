import axios from 'axios';



  

 const setAuthToken = () => {
    axios.interceptors.request.use(
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
              return config;
          },
          error => {
            if(error.response){
                console.log(error);
     
            }
        }
      );
}


export default setAuthToken
// Set config defaults when creating the instance
