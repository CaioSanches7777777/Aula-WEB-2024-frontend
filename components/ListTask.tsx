"use client";

import React, {useContext} from "react";
import { TaskContext } from "@/context/TaskContext";

const ListTask = ({}) => {

    const { tasks, removeTask } = useContext(TaskContext);

    return (
        <div className="flex flex-col  gap-4 sm:items-center sm:justify-between mb-8 sm:mb-8">
            <h2 className="text-2xl font-semibold">Minhas tarefas</h2>

            <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                {tasks.map((task:string, index:number) => (

                    <li key={index} className="flex flex-center gap-2 mb-2 text-center">
                        {task}
                        
                        <button onClick={() => removeTask(index)}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="fff" d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </li>

                ))}
            </ul>

        </div>
    );
};

export default ListTask;

/*
<ul className="max-w-md space-y-1 text-gray-500 list-inside">

                {tasks.map((task: string, index: number) => (

                    <li className='flex items-center gap-2 mb-2' key={index}>

                        <svg className="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>

                        {task}

                        <button onClick={() => removeTask(index)}>

                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 128 128">
                            <path fill="#fff" d="M84,124H44c-11.05,0-20-8.95-20-20V38h80v66C104,115.05,95.05,124,84,124z"></path><path fill="#fff" d="M104,38H24c-5.52,0-10-4.48-10-10v0c0-5.52,4.48-10,10-10h80c5.52,0,10,4.48,10,10v0 C114,33.52,109.52,38,104,38z"></path><path fill="#444b54" d="M117,28c0-7.17-5.83-13-13-13H24c-7.17,0-13,5.83-13,13s5.83,13,13,13h77v63c0,9.37-7.63,17-17,17H44 c-9.37,0-17-7.63-17-17V52c0-1.66-1.34-3-3-3s-3,1.34-3,3v52c0,12.68,10.32,23,23,23h40c12.68,0,23-10.32,23-23V40.64 C112.72,39.28,117,34.13,117,28z M104,35H24c-3.86,0-7-3.14-7-7s3.14-7,7-7h80c3.86,0,7,3.14,7,7S107.86,35,104,35z"></path><path fill="#444b54" d="M79,7H49c-1.66,0-3-1.34-3-3s1.34-3,3-3h30c1.66,0,3,1.34,3,3S80.66,7,79,7z"></path><path fill="#71c2ff" d="M50,107c-1.66,0-3-1.34-3-3V58c0-1.66,1.34-3,3-3s3,1.34,3,3v46C53,105.66,51.66,107,50,107z"></path><path fill="#71c2ff" d="M78,107c-1.66,0-3-1.34-3-3V58c0-1.66,1.34-3,3-3s3,1.34,3,3v46C81,105.66,79.66,107,78,107z"></path>
                        </svg>

                        </button>

                    </li>

                ))}

            </ul>
*/