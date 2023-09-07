import React, {useState} from "react";
import {FcTodoList} from "react-icons/fc";
import Todo from "./Todo";

const style = {
    bg: "h-screen w-screen p-4 bg-gradient-to-r from-[#d6cfc7] to-[#222021]",
    container: 'bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4',
    heading: 'text-3xl font-bold text-center text-grey-800 p-2',
    form: 'flex justify-between',
    input: 'border p-2 w-full text-xl',
    button: 'border p-4 ml-2 text-slate-100',
    count: 'text-center p-2'
}

function App() {
    const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode']);

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>TODO APP</h3>
                <form className={style.form}>
                    <input className={style.input} type="text" placeholder='add todo'/>
                    <button className={style.button}><FcTodoList size={30}/></button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                            <Todo key={index} todo={todo}/>
                        )
                    )}
                </ul>
                <p className={style.count}>You Have 2 ToDOs</p>
            </div>
        </div>
    );
}

export default App;
