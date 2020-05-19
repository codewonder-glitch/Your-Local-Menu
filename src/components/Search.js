import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Search.css'
import Call from './Call'
import ReviewCall from './ReviewCall'

class Search extends Component {
        constructor (){
        super ();
        this.state ={
        search: '',
        renderReview:false
        };
        }
updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
}
Click=(e)=>{
  e.preventDefault();
  this.setState({renderReview:true});
}

   render (){

      
     return(
      
        
        <div className="holder"> 
        {/* <hr/> */}
          <form onSubmit={this.submitHandler}>
              <div className="search-tag" htmlFor="search-input">
                  <input 
                  type= "text" 
                  name= "name" 
                  id ="search-input"
                  value= {this.state.search}
                  placeholder = "search"
                  onChange= {this.updateSearch.bind(this)}
                  />


               
                  
                  {/* <hr/> */}
                  <button className="button" type="submit" onClick={this.Click}> Submit</button>

{/* Button is used to submit the request */}
    <h1 className="caption"> Search for a restaurant that delivers in San Francisco</h1>
              </div>
          </form>
          <div>
          {this.state.renderReview &&
          <Call term="delis"/>}
          <ReviewCall restuarant="prospect-san-francisco" />}
          </div>
        </div>
     )
   }
}

export default Search