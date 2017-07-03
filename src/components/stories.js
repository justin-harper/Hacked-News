import React, { Component } from 'react';
import StoryItem from './storyItem';

class Stories extends Component {
  render() {
    let storyItems;
    if(this.props.stories) {
        storyItems = this.props.stories.map(story => {
            return(
                <StoryItem key={story.id} story={story} />
            );
        });
    }


    return (
      <div className="Stories">
        <h3>Story List</h3><br />
            <ol>
                {storyItems}
            </ol>
      </div>
    );
  }
}


export default Stories;
