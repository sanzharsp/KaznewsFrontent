import Button from '@mui/material/Button';
import axiosApiInstance from '../../components/API/auth-header'
import url from '../../components/backend-server-url'
import {useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

const Logout=()=>{
    const [Loading, setLoading] = useState(false); // загрузка в серевер данные
    const[Error,setError]=useState(false);
const LogoutCallback =() => {
    setLoading(true);
    axiosApiInstance.post(`${url.baseUrl}${url.Profile.logout}`,{refresh_token:localStorage.getItem('refresh'),}
    ).then(()=>{
        setLoading(false);
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
        window.location.replace("/") ;

    }).
    catch(()=>{
        setLoading(false);
        setError(true)
      
    })
   
}
    return(
        Loading
        ?
        <Backdrop
        sx={{ color: '#fff'}}
        open={true}
        onClick={Loading}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      :
        Error
        ?
        <div>
        <div>ERORR</div>
        <Button variant="outlined" onClick={LogoutCallback} color="error">Выйти</Button>
        </div>
        :
        <Button variant="outlined" onClick={LogoutCallback} color="error">Выйти</Button>

    );
}

export default Logout