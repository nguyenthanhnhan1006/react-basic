import React from 'react';
import './ListTodo.scss';

class ListTodo extends React.Component {

    state = {
        ListTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Eating dinner'},
            {id: 'todo3', title: 'Reading a book'},
        ]
    }
    render() {
        let {ListTodos} = this.state;


        return (
            <div className='list-todo-container'>
               <div className='add-todo'>
                    <input type='text'/>
                    <button type='button'>Add</button>

               </div>
               <div className='list-todo-content'>
                    {ListTodos && ListTodos.length > 0 && 
                    ListTodos.map((item, index) =>
                    {   return(
                        <div key={item.id} className='todo-child'>
                            <span> {index + 1} - {item.title}</span> <></>
                            <button> Edit </button>
                            <button> Delete </button>
                        </div>
                             )  
                        })
                    }

                    
               </div>
            </div>
        )

    }

}

export default ListTodo;