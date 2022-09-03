
import React, { Component } from 'react'
import axios from 'axios'
import url from '../backend-server-url'
import './search_style.css'
import PostListItem from '../API/getpost'
import TextAnim from '../Animation/PrintsTextAnim'


class LiveSearchFilter extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      Data_search: [],
      Result_filter:[],
      result_data_null:false,
      result_length:0,

    }
    this.cancelToken = ''
    this.node = React.createRef()
  }


  onLsChange = async (e) => {
    if (this.isReqToken) {
      this.isReqToken.cancel()
    }
    this.isReqToken = axios.CancelToken.source()
    await axios
      .get(`${url.baseUrl}${url.search}`, {
        isReqToken: this.isReqToken.token,
      })
      .then((res) => {
        this.setState({Data_search:res.data})
      
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('Could not get')
        }
      })
     

      let searchQuery = e.target.value.toLowerCase()
      let result = this.state.Data_search.filter((el) => {
        return el.title.toLowerCase().indexOf(searchQuery) !== -1
      })
  this.setState({Result_filter:result})
  if(result.length===0){
    this.setState({result_data_null:true,result_length:0})
  }
  else{
     this.setState({result_data_null:false,result_length:result.length})

  }
   
    
    
    
  }

  render() {
    
    return (
   
      <div className="searchModule">
<div className="container_search">
     <h4 className="data_lenght"> Всего найдено {this.state.result_length}</h4>
        <input
        
          onChange={this.onLsChange}
          type="text"
          placeholder="Поиск ..."
          className="container"
          ref={this.node}
        />
        </div>
        {this.state.result_data_null
        ?
    
        <div className="null_data">  Данного поста несуществует.<TextAnim text_main="Ищи где не ожидаешь" width="20"/></div>
   
        :
        <div  className="Container">
  
          {this.state.Result_filter.map((res) => {
      
            return (
           
                
              <PostListItem key={res.id} category={res.category} id={res.id} baseurl={url.baseUrl} image={url.baseUrl+res.image1}  title={ res.title }  content_text={res.context} image1={res.image1} author={{"Author_user":res.user.username,"author_first_name":res.user.first_name,"author_last_name":res.user.last_name}} published_date={res.date_add}/>
          
            
             
            )
            }
          )}
          </div>
        }
         
      </div>


    )
  }
}
export default LiveSearchFilter;