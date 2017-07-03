import API from './api';
//import $ from 'jquery';

let debug = console.log;

class DataManager {
  constructor() {
    this.TopStoryIds = [];
    this.API = new API();

    this.getTopStoryIds = function() {
      return this.TopStoryIds;
    };

    this.updateTopStoryIds = function(NewIds) {
      this.TopStoryIds =[...this.TopStoryIds, ...NewIds];
    };

    this.getTopStoryIdsFromAPI = function() {
      let dm = this;
      this.API.getTopStoriesIds().then(function(data){
        dm.updateTopStoryIds(data);
      }, function(){});
    };

    this.updateStories = function(context) {

      this.getTopStoryIdsFromAPI();
    };

  };
}

export default DataManager;