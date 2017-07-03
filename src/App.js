import React, { Component } from 'react';
//import uuid from 'uuid';
//import $ from 'jquery';
//import Projects from './components/projects';
//import AddProject from './components/addProject';
import Stories from './components/stories';
//import './App.css';
import DataManager from './data/dataManager.js';

let debug = console.log;

class App extends Component {
  constructor() {
    super();
    this.DM = new DataManager();
    this.state = {
      stories: [],
      storyIds:[],
    };
  }

  tick() {
    //this.updateStories();
    debug("here");
    //this.render();
  }


  componentDidMount() {
    //this.timer = setInterval(this.tick.bind(this), 5000);//5000);//300000);
  }

  componentWillMount() {
    this.DM.updateStories();
    let storyIds = this.DM.getTopStoryIds();
  }


  render() {
    return (
      <div className="App">
        <Stories stories={this.state.stories} />
      </div>
    );
  }
}

export default App;
