
import './StylesAuth.css'
import Captcha from './GetCaptha'
import url from '../../components/backend-server-url'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';

import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import Counter from '../../components/Mobx/ProfileRender/ProfileMobxRener'


const Register = () => {
    const [Loading,setLoading] = useState(false); // загрузка в серевер данные
    const [inputType,setInputType ] = useState('password');
     // boolean 

 const [checked, setChecked] = useState(false)

    const changeInputTypeHandler = (e) => {
        e.preventDefault();
        
        if (checked) {
            setInputType('password');
            setChecked(!checked);
        }
        else{
            setInputType('text')
            setChecked(!checked);
       
        }
      }
        let navigate = useNavigate();
        
        const [username, setUsername] = useState('');
        const [resetpassword, setresetpassword] = useState('');
        const [password, setPassword] = useState('');
        const [first_name, setFirst_name] = useState('');
        const [last_name, setLast_name] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const[captcha_value,setCaptcha_value]= useState('');

        const [msg, setMsg] = useState('');
        const [errorPasswordRepeat, seterrorPasswordRepeat] = useState('');
        const [errorUsername, setErrorUsername]=useState('');
        const [errorPassword, setErrorPassword,]=useState('');
        const [errorFirst_name, setErrorFirst_name]=useState('');
        const [errorLast_name, setErrorLast_name,]=useState('');
        const [errorSurname, setErrorSurname,]=useState('');
        const [errorEmail, setErrorEmail] = useState('');
        const [errorCaptcha_value, setErrorCaptcha_value] = useState('');

    const Auth_Register = async (e) => {
        setLoading(!Loading);
        e.preventDefault();
        if (password===resetpassword){
            seterrorPasswordRepeat('');
        try {
            
            await  axios.post(url.baseUrl+url.Auth.register, {
                username: username,
                password: password,
                first_name:first_name,
                last_name:last_name,
                surname:surname,
                email:email,
                captcha_value:captcha_value,
                hashkey:localStorage.getItem("captcha_key")
            }).then(response => {
                setLoading(false);
                localStorage.setItem("user",response.data.user.username)
                localStorage.setItem("first_name",response.data.user.first_name)
                localStorage.setItem("last_name",response.data.user.last_name)
                localStorage.setItem("access",response.data.access);
                localStorage.setItem("refresh",response.data.refresh);
                localStorage.removeItem("captcha_key")
                Counter.trigger();
                navigate("/", { replace: true });
           
                
                });
        } catch (error) {
            setLoading(false);
            if (error.response) {
                setMsg(error.response.data.detail);
                setErrorUsername(error.response.data.username);
                setErrorPassword(error.response.data.password);
                setErrorFirst_name(error.response.data.first_name);
                setErrorLast_name(error.response.data.last_name);
                setErrorSurname(error.response.data.surname);
                setErrorEmail(error.response.data.email);
                setErrorCaptcha_value(error.response.data.captcha_value);
                }
          
              
            }
        }
        if(password!==resetpassword) {
            setLoading(false);
            seterrorPasswordRepeat("Пароли не совподают")
        }
     
          
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
        
        <div>

        <div className="login-container">
        <form onSubmit={Auth_Register} className="form-login">
            <ul className="login-nav">
                <li className="login-nav__item active">
                    <a href="#">Регистрация</a>
                </li>
   
            </ul>
            <h4 className='error'>{msg}</h4>
            <label for="login-input-user" className="login__label">
                Придумайте логин
            </label>
            <input id="login-input-user" className="login__input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <h4 className='error'>{errorUsername}</h4>
            <label for="login-input-email" className="login__label">
                Емайл
            </label>
            <input id="login-input-email" className="login__input" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
            <h4 className='error'>{errorEmail}</h4>
            <label for="login-input-firstname" className="login__label">
                Имя
            </label>
            <input id="login-input-firstname" className="login__input" type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)}  />
            <h4 className='error'>{errorFirst_name}</h4>
            <label for="login-input-lastname" className="login__label">
                Фамлилия
            </label>
            <input id="login-input-lastname" className="login__input" type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            <h4 className='error'>{errorLast_name}</h4>
            <label for="login-input-surname" className="login__label">
                Отчество
            </label>
            <input id="login-input-surname" className="login__input" type="text" value={surname}  onChange={(e) => setSurname(e.target.value)} />
            <h4 className='error'>{errorSurname}</h4>
            <label for="login-input-password" className="login__label">
                Пароль
            </label>
            <input id="login-input-password" className="login__input" type={inputType} value={password}  onChange={(e) => setPassword(e.target.value)}/>
            
       
            <Checkbox checked={checked} onClick={changeInputTypeHandler} defaultChecked size="small" /> 
            <a className="cheked">Показать пароль</a>
        
            
            <h4 className='error'>{errorPassword}</h4>
          
            <label for="login-input-password" className="login__label">
            Повторите пароль
        </label>
        <input  className="login__input" type={inputType} value={resetpassword}  onChange={(e) => setresetpassword(e.target.value)}/>
        
        <h4 className='error'>{errorPasswordRepeat}</h4>
        <Captcha />
        <label className="login__label">
        Капча
    </label>
    <input  className="login__input" type="text"  value={captcha_value}  onChange={(e) => setCaptcha_value(e.target.value)} />
    <h4 className='error'>{errorCaptcha_value}</h4>    


            <button className="login__submit">Зарегистрировать</button>
            
        </form>
       
    </div>
        </div>
       
    )
}



export default Register;