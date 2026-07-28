import { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>You have {this.props.todos.length} todos.</p>;
  }
}

export default Count;
