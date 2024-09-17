import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Eating dinner" },
      { id: "todo3", title: "Reading a book" },
    ],
    editTodos: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });

    toast.success("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodos,
    });

    toast.success("Delete success!");
  };

  handleEditTodo = (todo) => {
    let { editTodos, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;
    //save
    if (isEmptyObj === false && editTodos.id === todo.id) {
      let ListTodosCopy = [...ListTodos];
      let objIndex = ListTodosCopy.findIndex((item) => item.id === todo.id);

      ListTodosCopy[objIndex].title = editTodos.title;
      this.setState({
        ListTodos: ListTodosCopy,
        editTodos: {},
      });
      toast.success("Update Todo success!");
      return;
    }
    //edit
    this.setState({
      editTodos: todo,
    });
  };

  handaleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodos };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodos: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;
    console.log(">>>> check empty object", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div key={item.id} className="todo-child">
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodos.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodos.title}
                            onChange={(event) =>
                              this.handaleOnchangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}

                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodos.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
