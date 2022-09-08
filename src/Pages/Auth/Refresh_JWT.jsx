import axios from 'axios'


const Refresh =()=>{
  

axios.post('http://127.0.0.1:8000/api/v1/login/refresh/',
{refresh:localStorage.getItem('refresh'),})
.then(response => {
localStorage.setItem("refresh",response.data.refresh);

}

)
.catch(error=>{

    console.log(error)
    
})

    }

  


export default Refresh