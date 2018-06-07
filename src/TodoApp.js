import React, { Component } from 'react';
import TodoTasks from "./TodoTasks";
class TodoApp extends Component {


   constructor(props){
     super(props);

     this.state = {
       items: [],
       counter: 0
     };

     this.addItem = this.addItem.bind(this);
     this.cleanList = this.cleanList.bind(this);
     this.removeTask = this.removeTask.bind(this);
   }

  render() {
    return (

      <div>
        <header>
            <h1>TODO APP</h1>
            <p>Click add to add an item to the list.<br/>
              Click remove to remove the last item from the list.<br/>
              Click clear to remove all of the tasks.
            </p>
            <button onClick={this.addItem}>ADD</button>
            <button onClick={this.removeTask}>REMOVE</button>
            <button onClick={this.cleanList}>CLEAR</button>
        </header>
          <TodoTasks tasks={this.state.items} />
      </div>

    );
  }

removeTask() {
  if(this.state.counter > 0){
    this.setState({
      items: this.state.items.splice(0,this.state.counter - 1),
      counter: this.state.counter - 1
      }
    );
  }
}

cleanList() {
  this.setState({
    items: [],
    counter: 0
    }
  );
}

addItem() {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat({text: 'Task number ',
        count: this.state.counter + 1}),
        counter: this.state.counter + 1
        };
      }
    );
}

}
export default TodoApp;
