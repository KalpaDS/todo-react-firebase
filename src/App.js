import React, {useState, useEffect} from "react";
import {FcTodoList} from "react-icons/fc";
import Todo from "./Todo";
import {db} from "./firebase";
import {collection, query, doc, onSnapshot, updateDoc, addDoc} from 'firebase/firestore';

const style = {
    bg: "h-screen w-screen p-4 bg-gradient-to-r from-[#d6cfc7] to-[#222021]",
    container: 'bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4',
    heading: 'text-3xl font-bold text-center text-grey-800 p-2',
    form: 'flex justify-between',
    input: 'border p-2 w-full text-xl',
    button: 'border p-4 ml-2 text-slate-100',
    count: 'text-center p-2'
};

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    //console.log(input);

    //Create todos
    const createTodo = async (r) => {
        r.preventDefault(r);
        if (input === '') {
            alert("Please enter a Todo..!!");
            return
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false
        })
        setInput('')
    };

    //Read_todo_from_firebase
    useEffect(() => {
        const q = query(collection(db, 'todos'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArray = [];
            querySnapshot.forEach((doc) => {
                todoArray.push({...doc.data(), id: doc.id})
            });
            setTodos(todoArray)
        });
        return () => unsubscribe()
    }, []);

    //Update_todos_in_firbase
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>TODO APP</h3>
                <form onSubmit={createTodo} className={style.form}>
                    <input value={input}
                           onChange={(r) => setInput(r.target.value)}
                           className={style.input} type="text" placeholder='add todo'/>
                    <button className={style.button}><FcTodoList size={30}/></button>
                </form>
                <ul>
                    {todos.map((todo, index) => (
                            <Todo key={index} todo={todo} toggleComplete={toggleComplete}/>
                        )
                    )}
                </ul>
                {todos.length < 1 ? null : <p className={style.count}>You Have {todos.length} Todos...</p>}
            </div>
        </div>
    );
}

export default App;
