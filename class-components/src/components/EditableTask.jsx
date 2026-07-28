import { Component } from 'react';

class EditableTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        if (this.props.task) {
            <li>{this.props.task}</li>
        } else {
            <input value={this.props.task}></input>
        }
            
    );
  }
}

export default EditableTask;