import React from "react";
import TodoItems from "./TodoItems";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items:[]
        };
        this._inputElement=React.createRef();
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value!==""){
            var newItem = {
                text:this._inputElement.current.value,
                key:Date.now()
            };
            console.log(newItem.text);

            this.setState((prevState)=>{
                 return {
                    items:prevState.items.concat(newItem)
                 };
            });
        }
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !==key);
        });

        this.setState({
            items:filteredItems
        });
    }

    render(){
        return (
            <div className="todoListMain">
              <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={this._inputElement} placeholder="enter task" type="text">
                    </input>
                    <button type="submit">add</button>
                </form>
              </div>
              <TodoItems entries={this.state.items}
                         delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;