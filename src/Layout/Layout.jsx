import React, { useEffect, useState } from 'react'
import TaskList from '../TaskList/TaskList'
import GeneralBT from '../GeneralBT/GeneralBT'
import NewTask from '../NewTask/NewTask'
import axios from 'axios';

export default function Layout() {

    const [tasks, setTasks] = useState([
        { _id: "123456", description: "משימה ראשונה", deadline: new Date, isDone: false },
        { _id: "1234567", description: "משימה שנייה", deadline: new Date, isDone: false },
        { _id: "1234568", description: "משימה שלישית", deadline: new Date, isDone: false }
    ]);

    useEffect(() => {
        axios.get('http://localhost:2700/task')
            .then((response) => setTasks(response.data));
    }, [])

    return (
        <div className='all'>
            <div className='taskTable'>
                <header>מה יש לך לעשות?</header>
                <main>
                    <TaskList tasks={tasks} setTasks={setTasks} />
                    <GeneralBT setTasks={setTasks} />
                    <NewTask setTasks={setTasks} />
                </main>
            </div>
        </div>
    )
}
