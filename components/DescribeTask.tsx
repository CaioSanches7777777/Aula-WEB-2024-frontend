'use client'

import React, { useContext, useState } from "react";
import { TaskContext, Task, Stage } from "@/context/TaskContext";

const DescribeTask = ({}) => {

    return (
        <div>
            {tasks.map((task:Task, index:number) => (
            <h3>{task.taskName}</h3>
            ))}
        </div>
    )
}