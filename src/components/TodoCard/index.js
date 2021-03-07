import React, {useState} from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import s from './style.module.scss';

const TodoCard = ({todo, onChange, onDelete, onEdit}) => {
    const [isEditFormOpen, setEditForm] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const submitHandler = (event) => {
        event.preventDefault();

        onEdit(todo.id, title);

        setEditForm(false);
    }

    return (
        <div className={s.card} key={todo.id}>
            <h1 className={s.cardTitle}>{todo.title}</h1>

            <Button 
                color={todo.done ? 'secondary' : 'warning'}
                onClick={() => onChange(todo.id)}
                block>
                {todo.done ? 'DONE' : 'READY TO GO!'}
            </Button>
        
            <Button
                color='danger'
                onClick={() => onDelete(todo.id)}
                block>
                    DELETE
            </Button>

            <Button 
                color='accent'
                onClick={() => setEditForm(!isEditFormOpen)}
                block>
                EDIT
            </Button>
        
            {
                isEditFormOpen &&
                <div className={s.editFormWrapper}>
                    <form onSubmit={submitHandler}>
                        <div className={s.formGroup}>
                            <label className={s.editLabel} htmlFor={`edit-input-${todo.id}`}>
                                Todo Text
                            </label>
                            <Input 
                                className={s.input} 
                                id={`edit-input-${todo.id}`}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder='Enter a text...' />
                        </div>
            
                        <div className={s.formGroup}>
                            <Button color='primary' type='submit' block>
                                SAVE
                            </Button>
                        </div>
                    </form>
                </div>
            }
        </div>)
}

export default TodoCard