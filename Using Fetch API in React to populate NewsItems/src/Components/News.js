import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b1453ae6bc324bac806a4bc72015ae7c";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element , index)=> {
          return <div className="col-md-4 " key={element.url}>
                   <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/photo/99029373.cms" } newsUrl={element.url} />
                  </div>
        })}
          
          
        </div>
      </div>
    )
  }
}
