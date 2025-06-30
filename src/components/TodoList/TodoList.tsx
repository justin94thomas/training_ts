import React from 'react';
import { TODOs } from '../../types';

interface List {
    todo: TODOs[];
    markDone: (id: number) => void
}

const TodoList: React.FC<List> = ({ todo, markDone }) => {
    return (<>
        <h2>View Todos</h2>
        {todo.length === 0 ? (<p>You are free!</p>) : todo.map(list => (
            <div key={list.id}>
                <p style={{ textDecoration: list.checked ? 'line-through' : "" }}>{list.name} &nbsp;
                    <button onClick={() => markDone(list.id)}>Done</button> 
                </p>
            </div>
        ))}
    </>)
}

export default TodoList;