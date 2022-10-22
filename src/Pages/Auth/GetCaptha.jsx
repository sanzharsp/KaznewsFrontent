import './StylesAuth.css'
import React from 'react';
import axios from 'axios';
import url from '../../components/backend-server-url'
import Skeleton from '@mui/material/Skeleton';

/*основной компонент для загрузки данных и оброботке ошибок */

let baseurl =url.baseUrl
let url_get_data=url.Auth.register


export default class Captcha extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state= {
    url: '',
    loading: true,
    error:false
  }



  componentDidMount() {

    axios.get(`${baseurl}${url_get_data}`)
      .then(res => {
        const captcha_data = res.data;


        localStorage.setItem("captcha_key",captcha_data.key)
       

        this.setState({ url:captcha_data.image_url ,loading: false});
      })
      .catch(err => { 
  
        this.setState({ error:true});
      
      })
  }
  handleClick = (event) => {
    this.setState({ loading:true});
    event.preventDefault();
    this.componentDidMount()
  }

  
  
  render() {
 
    return (
      <div className="container_captcha">
      {
        this.state.loading
        ?
      <Skeleton className="image_captcha" variant="rectangular" width={200} height={60} />
      :
      <img className="image_captcha" src={baseurl +this.state.url}/>
      }
      <div className="captcha">
      
      <button className="login__submit" onClick={this.handleClick} >
        обновить
      </button>
      </div>
    
      </div>

      
      )
      
  }
}

