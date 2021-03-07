import React, {useState} from 'react';
import TodoCard from '../../components/TodoCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

import s from './style.module.scss';


const TodoPage = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Todo 1', done: true},
        {id: 2, title: 'Todo 2', done: false},
        {id: 3, title: 'Todo 3', done: false},
    ]);
    const [idCounter, setIdCounter] = useState(4);
    const [todoText, setTodoText] = useState('');

    const todoAddHandler = (event) => {
        event.preventDefault();

        if (!todoText.trim()) return;

        const newTodo = {id: idCounter, title: todoText, done: false};
        setTodos([...todos, newTodo])
        setIdCounter(idCounter + 1);
        setTodoText('');
    }

    const todoChangeHandler = (todoId) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                return {...todo, done: !todo.done};
            }

            return todo;
        }));
    }

    const todoDeleteHandler = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    const todoEditHandler = (todoId, newTitle) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                return {...todo, title: newTitle};
            }

            return todo;
        }))
    }


    return <>
        <div className={s.addFormWrapper}>
            <form onSubmit={todoAddHandler}>
                <div className={s.formGroup}>
                    <Input 
                        placeholder='Enter a Todo...'
                        value={todoText}
                        onChange={e => setTodoText(e.target.value)} />
                </div>

                <div className={s.formGroup}>
                    <Button color='primary' type='submit'>
                        ADD TODO
                    </Button>
                </div>
            </form>
        </div>

        <div className={s.todoList}>
        {
            todos.map(todo => <TodoCard 
                                key={todo.id}
                                todo={todo}
                                onChange={todoChangeHandler}
                                onDelete={todoDeleteHandler}
                                onEdit={todoEditHandler} />)
        }
        </div>
    </>
}

export default TodoPage;
