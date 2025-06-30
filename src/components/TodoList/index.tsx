import React, { useState } from 'react';
import { TODOs } from '../../types';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


function ToDo() {
    const [todo, setTodos] = useState<TODOs[]>([
        { id: 1, name: 'Init todo', checked: false }
    ])

    const submitTodo = (text: string) => {
        const newItem = {
            id: Math.random(),
            name: text,
            checked: false
        };
        setTodos(prev => [...prev, newItem]);
    }

    const markDone = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, checked: true } : todo
            )
        );
    }

    return (<>
        <AddTodo submitTodo={submitTodo} />
        <TodoList todo={todo} markDone={markDone} />
    </>)
}

export default ToDo;