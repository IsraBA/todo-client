import React, { useEffect, useState } from 'react'
import Task from './Task/Task'
import axios from 'axios';

export default function TaskList({ tasks, setTasks }) {

    return (
        <>
            {tasks.map(task => <Task
                setTasks={setTasks}
                key={task._id}
                taskId={task._id}
                description={task.description}
                deadline={task.deadline}
                isDone={task.isDone}
            />)}
        </>
    )
}
