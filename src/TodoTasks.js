import React, { Component } from "react";

class TodoTasks extends Component {

  render() {
    var listItems = this.props.tasks.map(item => <li key={item.count}>{item.text}{item.count}</li>);

    return (
      <ul>
          {listItems}
      </ul>
    );
  }
};

export default TodoTasks;
