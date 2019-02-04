import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import UrlBox from './UrlBox';
import ImageBox from './ImageBox';

class Main extends Component {
    constructor(props){
        super(props);
        this.title = "Url-Img";
        this.btnName = "Take Screenshot ... ";
        this.state={
          url:""
        };
        this.takeUrl = this.takeUrl.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.accessKey = 'd2bc96d4b1d34674be1ad7196e79d601';
        // this.format ="png";
        // this.fullPage ="true";
    }
    takeUrl(event){
      let value = event.target.value;
      this.setState({
        url:value
      });
      console.log("url",this.state.url);
    }
   
    clickHandler(){
      axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=${this.accessKey}&format=png&full_page=true&response_type=image&url=${this.state.url}`).then(data =>{
        console.log("data",data);
      }).catch(e=>{
        console.log("Error is ",e);
      });
    }


  render() {
    return (
      <div className="container">
        <Title name={this.title} />
        <UrlBox getUrl={this.takeUrl} btnName={this.btnName} click={this.clickHandler} />
        <ImageBox />
      </div>
    );
  }
}

export default Main;
