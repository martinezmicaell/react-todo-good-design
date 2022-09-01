import React, {useState} from 'react'

//css
import './containerList.scss'
//components
import List from '../List/List'
import TaskCounter from '../TaskCounter/TaskCounter'

import {BiSearchAlt} from "react-icons/bi"

const ContainerList = ({setTasks, tasks}) => {

    const [search, setSearch] = useState('');
    const [countTask, setCountTask] = useState(0);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const tasksCompleted = tasks.filter(task => task.checked === true);
    const countTasksCompleted = tasksCompleted.length;
    const totalTasks = tasks.length;

    console.log(tasksCompleted, 'cantidad tarea completas')

  return (
    <section className="containerList">
        <h2 className="containerList__title">Your Tasks</h2>
        {/* <h4 className="containerList__progress">Completed {countCompleted} of {tasks.length}</h4> */}
        <TaskCounter countTask={countTask} totalTasks={totalTasks} />



        <div className="containerSearch">
            <input className="containerSearch__search" type="text" placeholder='Search...' onChange={handleSearch} />
            <div className="containerIcon">
                <BiSearchAlt className="containerIcon__icon"/>
            </div>
        </div>


        <ul className="list__container">
                 {tasks.slice().sort((a, b) => b.date - a.date).filter(task => task.body.toLowerCase().includes(search)).map((task) => {
                    return (
                    <List search={search} setTasks={setTasks} tasks={tasks} task={task} key={task.id} setCountTask={setCountTask} countTasksCompleted={countTasksCompleted}/>
                    )
                 })}
        </ul>

    </section>
  )
}

export default ContainerList