import React from "react";
import {FcFullTrash} from "react-icons/fc";

const style = {}

const Todo = ({todo}) => {
    return (
        <li className={style.li}>
            <div className={style.row}>
                <input type="checkbox"/>
                <p className={style.text}>{todo}</p>
            </div>
            <button><FcFullTrash size={30}/></button>
        </li>
    )
};

export default Todo;
