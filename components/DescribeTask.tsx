'use client'

import React, { useContext, useState } from "react";
import { TaskContext, Task, Stage } from "@/context/TaskContext";

const DescribeTask = ({}) => {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {tasks.map((task:Task, index:number) => (
                <div>
                    <h3>{task.taskName}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}