import { useState } from "react";
import AddTodo from "./AddTodo";
import useTodoStore from "../../store/todoStore";
import TodoTable from "./TodoTable";

const TodoPage = () => {
    
    // if you see we got a problem 
    // from edit todo there is button edit  on click of it we have to pass data to add todo 
    // we have to pass data from todo table to add todo  krna hoga
    // to hme child table se child component me data pss
    // to hm state define parent me karange in todo page for edit 
    const [isEditing, setisEditing]=useState(false) // this track i am in editing mode or in creating mode, 
    const [editingTodo, setEditTodo] = useState(null) // this is actual todo that we are edit.

    const handleEdit = (todo) => {
        console.log("edittodo", todo) // is todo ko hm add todo me pass kr sakte he
        setEditTodo(todo);
        setisEditing(true)
    }

    // ye hmne child component se parent me data pass kia he 
    // koi kambal odh raha he kisi go garmi lag rahi he

    return (
        <div className=" h-screen w-full flex justify-center">
            <div className="border-2 w-[50%]">
                <AddTodo
                    isEditing={isEditing} // boolean that track editing , or creating mode
                    editingTodo={editingTodo} // actual todo data
                    setisEditing={setisEditing} // on click of update revert that state to false,
                    setEditTodo={setEditTodo} // after update make it null defult behaviour.
                />
                <TodoTable handleEdit={handleEdit} />
            </div>
        </div>
    )
}
export default TodoPage;