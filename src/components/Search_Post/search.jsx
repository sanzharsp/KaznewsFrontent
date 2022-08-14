
import React, { Component } from 'react'
import axios from 'axios'
import url from '../backend-server-url'
import './search_style.css'
import PostListItem from '../API/getpost'
import Footer from '../footer/footer'


class LiveSearchFilter extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      Data_search: [],
      Result_filter:[],
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
   
    
    
    
  }

  render() {
    
    return (
   
      <div className="searchModule">
     
        <input
        
          onChange={this.onLsChange}
          type="text"
          placeholder="Поиск ..."
          ref={this.node}
        />
        <div  className="Container">
          {this.state.Result_filter.map((res) => {
      
            return (
             
              <PostListItem key={res.id} category={res.category} id={res.id} baseurl={url.baseUrl} image={url.baseUrl+res.image1}  title={ res.title }  content_text={res.context} image1={res.image1} author={{"Author_user":res.user.username,"author_first_name":res.user.first_name,"author_last_name":res.user.last_name}} published_date={res.date_add}/>
     
            
             
            )
            }
          )}
          </div>
         
      </div>
      

    )
  }
}
export default LiveSearchFilter;