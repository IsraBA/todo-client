import React, { useState } from 'react'
import Button from '../../Button/Button'
import axios from 'axios';

export default function Task({ setTasks, description, deadline, isDone, taskId }) {

    const [isChecked, setIsChecked] = useState(isDone);

    const hadleChange = (e) => {
        setIsChecked(e.target.checked);
        axios.put('http://localhost:2700/task', { isDone: e.target.checked })
        .then((response) => console.log(response))
    };

    // חישוב הזמן שנותר לביצוע המשימה
    const calculateHoursRemaining = (futureDate) => {
        const currentDate = new Date();
        const timeDifference = futureDate.getTime() - currentDate.getTime();
        const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));

        // עדכון הזמן כל שעה
        setTimeout(function () {
            calculateHoursRemaining(futureDate);
        }, 3600000); // 1 hour = 3600000 milliseconds

        return hoursRemaining;
    }

    const hadleDelete = () => {
        axios.delete('http://localhost:2700/task/' + taskId)
            .then(() => axios.get('http://localhost:2700/task')
                .then((response) => setTasks(response.data)))
    };

    return (
        <div className='task'>
            <input
                type="checkbox"
                name="done"
                checked={isChecked}
                onChange={hadleChange}
            />
            <span>{description}</span>
            <span>{calculateHoursRemaining(deadline)}</span>
            <Button text={"מחיקה"} icon={"🗑️"} func={hadleDelete} />
        </div>
    )
}
