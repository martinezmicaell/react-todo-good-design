import React, { useState } from 'react'

import './list.scss';

//icon
import { HiOutlineTrash } from 'react-icons/hi'

const List = ({ search, setTasks, tasks }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckbox = (e) => {
        const text = e.target.parentElement.nextElementSibling;

        if (checked) {
            text.classList.remove('line-through')
        } else {
            text.classList.add('line-through')

        }
        setChecked(!checked)

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
            {console.log(tasks, 'here in li')}

            <ul className="list__container">
                {tasks.slice().sort((a, b) => b.date - a.date).filter(task => task.body.toLowerCase().includes(search)).map((task) => {
                    return (
                        <li id={task.id} key={task.id} className="list__li" >
                            <div className="list__checkboxContainer">
                                <label htmlFor='checkbox'></label>
                                <input className="list__checkbox" type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckbox} />
                                <span className="list__checkmark"></span>
                            </div>
                            {<p>{task.body}</p>}
                            {/* <div className="list__trashContainer">
                            <HiOutlineTrash className="list__trash" onClick={handleTrash} />
                        </div> */}
                            <HiOutlineTrash className="list__trash" onClick={handleTrash} />

                        </li>
                    )
                })}

            </ul>
        </>
    )
}

export default List