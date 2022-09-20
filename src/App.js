import Head from "./components/head/head"
import './components/style/images.css'
import React  from 'react';
import IndexPage from './components/Index/Index'
import NotfoundPage from './components/NotfoundPage/NotfoundPage'
import LinkToPost from './components/LinkToPost/LinkToPost'
import AboutPage from './components/AboutPage/AboutPage'
import MainNewsRequest from './components/MainNewsPage/MainNewsRequest'
import ContactPage from './components/ContactPage/ContactPage'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import Redactor from './Pages/Redactor/Redactor'
import LiveSearchFilter from './components/Search_Post/search'
import InfoProfile from './components/Profile/info-profile'
import Profile from './components/Profile/profile'

import {
  BrowserRouter as Router,
  

  useRoutes,
 
  
} from "react-router-dom";


function App() {

  const Routings = () => {
    let routes = useRoutes([
      { path: "/", element: <IndexPage /> },
      { path: "*" , element: <NotfoundPage/>},
      { path: "post/:id" ,element:<LinkToPost />},
      { path: "main_news/post/:id" ,element:<LinkToPost />},
      { path: "about", element: <AboutPage />},
      { path: "main_news", element: <MainNewsRequest />},
      { path: "contact", element: <ContactPage />},
      { path: "register", element: <Register />},
      { path: "login", element: <Login />},
      { path: "redactor", element: <Redactor />},
      { path: "search", element: <LiveSearchFilter/>},
      { path: "profile", element: <Profile/>},
      
      
     
    ]);
    return routes;
  };
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
 infoprofile={<InfoProfile/>}
 />


</header>
<Routings /> 
 </Router>


</div>


);
}

export default App;
