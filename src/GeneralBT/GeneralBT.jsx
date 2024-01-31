import React from 'react'
import Button from '../Button/Button'
import axios from 'axios';

export default function GeneralBT({ setTasks }) {

    const hadleDeleteAll = () => {
        axios.delete('http://localhost:2700/task')
            .then(() => axios.get('http://localhost:2700/task')
                .then((response) => setTasks(response.data)))
    };
    const hadleChackAll = () => {
        axios.put('http://localhost:2700/task/true')
            .then(() => axios.get('http://localhost:2700/task')
                .then((response) => setTasks(response.data)))
    };
    const hadleUnChackAll = () => {
        axios.put('http://localhost:2700/task/false')
            .then(() => axios.get('http://localhost:2700/task')
                .then((response) => setTasks(response.data)))
    };


    return (
        <div className='buttons'>
            <Button text={"מחיקת הכל"} icon={"🗑️"} func={hadleDeleteAll} />
            <Button text={"סימון הכל כבוצע"} icon={"✅"} func={hadleChackAll} />
            <Button text={"סימון הכל כלא בוצע"} icon={"❌"} func={hadleUnChackAll} />
        </div>
    )
}
