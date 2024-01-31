import axios from 'axios';
import React from 'react'

export default function NewTask({ tasks }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        // for (let entry of fd.entries()) {
        //     console.log(entry[0] + ': ' + entry[1]);
        // }
        try {
            axios.post('http://localhost:2300', fd)
            .then(() => axios.get('http://localhost:2700/task')
                .then((response) => setTasks(response.data)))
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className='newTask'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='description' required/>
                <input type="date" name="deadline" required/>
                <button type="submit">הוספה</button>
            </form>
        </div>
    )
}
