import React, {Component} from 'react';
import TodoItems from './TodoItems';
import classes from './TodoList.module.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    
    this.refInput = React.createRef();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.refInput.current.focus();
  }
  
  addItem(e) {
    let itemArray = this.state.items;
    if (this.refInput.current.value!== '') {
      itemArray.unshift({
        text: this.refInput.current.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });
      this.refInput.current.value = '';
      this.refInput.current.focus();
    }
    console.log(itemArray);
    e.preventDefault();
  }
  
  deleteItem(key) {
    let filteredItems = this.state.items.filter(function(item) {
      return (item.key!== key);
    });

    this.setState({
      items: filteredItems
    });

    this.refInput.current.focus();
  }  

  render() {
    return (
      <div className={classes.todoListMain}>
        <div className={classes.header}>
          <form onSubmit={this.addItem}>
            <input 
              ref={this.refInput} 
              type = 'text' 
              placeholder="Введите задачу" 
            />
            <button type='submit'>Добавить</button>
          </form>
        </div>
        <TodoItems 
          delete={this.deleteItem} 
          entries={this.state.items}
        />
      </div>
    );
  }
}

export default TodoList;