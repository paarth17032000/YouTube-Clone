import React, { Component } from 'react'
import './App.css';
import api from './api/api'
import Header from './components/header';
import Search from './components/search';
import VideoDetails from './components/videoDetail';
import VideoList from './components/videoList';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (search) => {
    const data = await api.get('search',{
      params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyARuLhjxbhXct6uE9lY1ikEN1a0j7dJhx0',
        q:search
      }
    });
    this.setState({
      videos: data.data.items,
      selectedVideo: data.data.items[0]
    })
  }
  render() {
    let { videos, selectedVideo } = this.state
    return (
      <div>
        <div className="App">
        <Header />
        <Search onFormSubmit={this.handleSubmit}/>
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-8">
              <VideoDetails video={selectedVideo}/>
            </div>
            <div className="col-sm-4">
              <VideoList videos={videos}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
