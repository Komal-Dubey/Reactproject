import { create } from "zustand";

// banano 
const useTodoStore = create((set,get)=> ({
    // empty todo items initialise
    todoItems: [], // all todos are stored in this array

    // add todo 
    // when we fill input and priority and click on add then all data sent to state that comes in todo
    // jaha add todo ko use karange vha se pass karange formdata, that comes here same as product
     addTodo: (todo) => {
        set((state) => {
            // old todos and new comes store in udpatedtodos we can directly write lik e
            const udatedTodos = [...state.todoItems, todo] 
            console.log({udatedTodos})
            return {
                todoItems: udatedTodos// same create variable and use that or we can directly write here.
            }
        })
     },
    //update todo 
    updateTodo: (id, udpatedTodo) => {  // this is udpate todo function not a variable 
        // jisko edit kr rahe he that is id, and kisse udpate kr rahe he kya content hoga vo update todo
        set((state) => ({
            todoItems: state.todoItems.map((todo) => // using map
                todo.id == id ? {...todo, ...udpatedTodo} : todo
            )
        }))
    }

    // remove todo

    // mark as complete 

}))


export default useTodoStore;