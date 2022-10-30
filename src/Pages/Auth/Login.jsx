import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import axios from 'axios';
import Counter from '../../components/Mobx/ProfileRender/ProfileMobxRener'

import './StylesAuth.css'
import url from '../../components/backend-server-url'


const Login = () => {

    const [Loading, setLoading] = useState(false); // загрузка в серевер данные
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [errorUsername, setErrorUsername]=useState('');
    const [errorPassword, setErrorPassword,]=useState('');

    const Auth_Login = async (e) => {
        setLoading(!Loading);
       

        e.preventDefault();
        try {
            await  axios.post(url.baseUrl+url.Auth.login, {
                username: username,
                password: password
            }).then(response => {
                
                setLoading(false);
                localStorage.setItem("access",response.data.access);
                localStorage.setItem("refresh",response.data.refresh);
                localStorage.setItem("user",response.data.user.username);
                Counter.trigger();
                navigate("/", { replace: true });
           
                
                });
        } catch (error) {
            setLoading(false);
            if (error.response) {
                setMsg(error.response.data.detail);
                setErrorUsername(error.response.data.username);
                setErrorPassword(error.response.data.password);
                }
          
               
            }
     
          
        }
    
 
    return (
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
        <div className="login-container">

                            <form onSubmit={Auth_Login} className="form-login">
                            <ul className="login-nav">
                            <li className="login-nav__item active">
                                <a href="#">Авторизация</a>
                            </li>
                    
                        </ul>
                                <h4 className='error'>{msg}</h4>


                                <label  className="login__label">
                                Ваш логин
                            </label>
                            <input className="login__input" value={username} type="text" onChange={(e) => setUsername(e.target.value)}/>
                            <h4 className='error'>{errorUsername}</h4>

                                <label  className="login__label">
                                Пароль
                            </label>
                            <input  className="login__input" value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>

                            <h4 className='error'>{errorPassword}</h4>
                  
                                <button className="login__submit" >авторизоваться</button>
                                
                            </form>
                            <a href="#" className="login__forgot">Забыли пароль?</a>
                        </div>
     
    )
}
 
export default Login