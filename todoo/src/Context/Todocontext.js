import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "todomsg",
            checked: false
        }
    ],
    addtodo: (todo) => {},
    updaettodo: (id, todo) => {},
    deletetodo: (id) => {},
    togglecomplete: (id) => {}
})

export const Usetodo = () => {
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider