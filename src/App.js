import Head from "./components/head/head"
import './components/style/images.css'
import React  from 'react';

import Routings from './components/routing/routing'
import {BrowserRouter as Router} from "react-router-dom";



function App() {

  <Routings />
  return (
    <div>
    
    <Router>
    
<header>

      
<Head 
 title={"KAZNEWS"}
 home={"ГЛАВНАЯ"}  
 skills={"ОСНОВНЫЕ НОВОСТИ"} 
 projects={"О НАС"} 
 contact={"КОНТАКТЫ"} 
 register={'РЕГИСТРАЦИЯ'} 
 login={'АВТОРИЗАЦИЯ'}
 redactor={'РЕДАКЦИЯ'}

 />


</header>
<Routings /> 
 </Router>


</div>


);
}

export default App;
