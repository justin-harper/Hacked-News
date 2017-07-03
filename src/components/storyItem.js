import React, { Component } from 'react';


class Storyitem extends Component {
  render() {
    return (
      <li className="Story">
        <strong><a href={this.props.story.url} >{this.props.story.title}</a></strong><br />
        By: {this.props.story.by}, Posted: {new Date(this.props.story.time*1000).toString()}  Score:{this.props.story.score}
      </li>
    );
  }
}

export default Storyitem;
