import { Component } from 'react';
import EditableTask from './EditableTask';

class ToDos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <div className="todo-row" key={todo}>
            <EditableTask task={todo} />
            <button type="button" onClick={() => this.props.handleDelete(todo)}>
              Delete
            </button>
            <button type="button" onClick={() => this.props.handleEdit(todo)}>
              Edit
            </button>
          </div>
        ))}
      </ul>
    );
  }
}

export default ToDos;
