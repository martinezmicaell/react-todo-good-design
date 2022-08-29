import React, {useState} from 'react'

import './containerNewtask.scss'
import imagen from '../../img/to-do-image.webp'

const ContainerNewTask = ({setTasks, tasks}) => {
    const [newTask, setNewTask] = useState('');

    const handleInput = (e) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newTask <= 4 ) {
            console.log('No puede ser tan corta la tarea')
        } else {
            const obj = {
                id: tasks.length + 1,
                checked: false,
                date: new Date(),
                body: newTask,
            }
            setTasks(prevTasks => [...prevTasks, obj])
            console.log(tasks)

            e.target.reset();
        }

    }

    return (
        <section className='containerNewTask'>
            <h2 className='toDo__h2'>Create new Task</h2>

            <form className='toDo' onSubmit={handleSubmit}>
                <label className="toDo__label" htmlFor="toDo__input">Task Name</label>
                <input className="toDo__input" type="text" name="toDo" minLength={4} placeholder='Launch rocket to the moon' onChange={handleInput} />
                <button className="toDo__submit" type='submit'>Create Task</button>
            </form>

            <figure className='toDo__figure'>
                <img className="toDo__img" src={imagen} alt="" />
            </figure>
        </section>
    )
}

export default ContainerNewTask