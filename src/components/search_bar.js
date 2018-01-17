import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  render() {
    return (
    <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
    </div>
    );
  }
}

// handling events 2 steps
//1st event handler
//2nd pass the event handler to element we want to monitor
//State is a plain js object that is used to record and react to user events
// each class based component that we defined has its OWN state object,
//whenever a component state is changed the component immediately re-renders and also forces
//all of its children to re-render aswell
