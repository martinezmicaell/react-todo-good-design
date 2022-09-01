import React, { useState } from 'react'

import './list.scss';

//icon
import { HiOutlineTrash } from 'react-icons/hi'

const List = ({setTasks, tasks, task, setCountTask, countTasksCompleted }) => {
    const [checked, setChecked] = useState(task.checked);

    const handleCheckbox = (e) => {
        const text = e.target.parentElement.nextElementSibling;

        if (checked) {
            text.classList.remove('line-through');
            task.checked = !task.checked;

        } else {
            text.classList.add('line-through')
            task.checked = !task.checked;

        }
        console.log(tasks)
        const tasksCompleted = tasks.filter(task => task.checked === true).length;

        setChecked(!checked)

        setCountTask(tasksCompleted)


    }

    const handleTrash = (e) => {
        const trashDelete = window.confirm("Deseas eliminar la tarea?");

        if (trashDelete) {
            let li = e.target.parentElement;
            console.log(li)

            if (li.classList.contains('list__trash')) {
                console.log('SEnala al ul')
                li = li.parentElement;
            }
            let id = Number(li.id);
            console.log(id, 'id event')

            const result = tasks.filter(task => task.id !== id)
            console.log(tasks[0].id, 'id back')

            setTasks(result)
            console.log(result)

            // console.log(result, 'holi')
            // setTasks(result)
            // console.log(tasks, 'wtf')
        }

    }

    return (
        <>
            <li id={task.id} key={task.id} className="list__li" >
                <div className="list__checkboxContainer">
                    <label htmlFor='checkbox'></label>
                    <input className="list__checkbox" type="checkbox" checked={checked} name="checkbox" id="checkbox" onChange={handleCheckbox} />
                    <span className="list__checkmark"></span>
                </div>
                {<p>{task.body}</p>}

                <HiOutlineTrash className="list__trash" onClick={handleTrash} />

            </li>
        </>
    )
}

export default List