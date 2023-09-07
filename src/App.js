import React from "react";
import {FcTodoList} from "react-icons/fc";

const style = {
    bg: "h-screen w-screen p-4 bg-gradient-to-r from-[#d6cfc7] to-[#222021]"
}

function App() {
    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>TODO APP</h3>
                <form className={style.form}>
                    <input className={style.input} type="text" placeholder='add todo'/>
                    <button className={style.button}><FcTodoList size={30}/></button>
                </form>
                <ul>

                </ul>
            </div>
        </div>
    );
}

export default App;
