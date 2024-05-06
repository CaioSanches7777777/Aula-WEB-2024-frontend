//ela que faz a gestão (incluir e remover itens) da lista de tarefas
"use client";

import React, {createContext, useState} from "react";

type TaskContextType = {
    tasks: string[];
    addTask: (neme:string ,description:string) => void;
    removeTask: (taskIndex:number) => void;
}

export const TaskContext = createContext({} as TaskContextType);

export const TaskContextProvider = ({ children }: Readonly<{children: React.ReactNode;}>) => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (taskName:string ,description: string) => {
        if(taskName!= '' && description != '') setTasks([...tasks, taskName])
    };

    const removeTask = (taskIndex: number) => {
        setTasks(tasks.filter((_, index) => taskIndex !== index)); //filtra o array de tarefas pelo index das tarefas, ignorando o valor do conteúdo
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
};