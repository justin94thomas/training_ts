import React, { useState } from 'react';

interface Add {
    submitTodo: (text: string) => void
}

const AddTodo: React.FC<Add> = ({ submitTodo }) => {
    const [input, setInput] = useState<string>("");
    return (
    <>
        <h2>Add New Todo</h2>
        <input name='todo' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={(e) => submitTodo(input)}>Submit</button>
    </>)
}

export default AddTodo;