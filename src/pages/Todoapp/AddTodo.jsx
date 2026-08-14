import { useEffect, useState } from "react";
import useTodoStore from "../../store/todoStore";

const AddTodo = ({isEditing, editingTodo, setisEditing, setEditTodo}) => { // prop pass kia he to get to karange hi or yaha hi krte he 
    const [formdata, setFormData] = useState({
        text: '',
        priority: 'medium',
        completed: false
    })
    // from usetodostore use add todo function;

    // now w implement upate todo

    const addTodo = useTodoStore(state => state.addTodo);
    const udpateTodo = useTodoStore((state) => state.updateTodo)

    // we have to chagne this function too if we are in editing mode then udpate else add
    const handleSubmit=()=>{
        if(isEditing) {
            udpateTodo(editingTodo.id, formdata) // same button se use for udpate or add right
            // so if we are in edit mode tehen call udpate function otherwise for adding call add todo
            // udpate pass 2 arguments 1 is id and second is data

            setisEditing(false)
            setEditTodo(null);
        } else {

            addTodo({ 
                id: Date.now(),
                text: formdata.text,
                priority: formdata.priority,
                completed: formdata.completed
            }) 
        }

        // clear the form after udapte or add
        setFormData({
        text: '',
        priority: 'medium',
        completed: false
    })
    }

    //  we should use useeffect to when click onedit and editing todo changes and we can track that and update state

    useEffect(() => {
        if(editingTodo) {
            setFormData({
                text: editingTodo.text,
                priority: editingTodo.priority,
                completed: editingTodo.completed 
            })
        }
    }, [editingTodo]) 

   
    return (
        <div className="flex justify-center my-2 gap-2 pb-2 border-b border-gray-300">
            <input
                type="text"
                placeholder="Enter here"
                className=" border-2 border-gray-400 rounded-lg py-1 px-2"
                value={formdata.text}
                onChange={(e) => setFormData({ ...formdata, text: e.target.value })}
            />
            <div>
            <select className="border-2 border-gray-400 rounded-lg py-1"
                value={formdata.priority}
                onChange={(e) => setFormData({ ...formdata, priority: e.target.value })}
            >
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
            </select>
            </div>
            <button className=" border-0 bg-blue-600 px-5 rounded-lg text-white"onClick={handleSubmit}>{isEditing ? "Update" : "Add"}</button>
        </div>
    )
}
export default AddTodo;