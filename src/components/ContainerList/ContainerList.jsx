import React, {useState} from 'react'

//css
import './containerList.scss'
//components
import List from '../List/List'
import {BiSearchAlt} from "react-icons/bi"

const ContainerList = ({setTasks, tasks}) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

  return (
    <section className="containerList">
        <h2 className="containerList__title">Your Tasks</h2>
        <h4 className="containerList__progress">Completed 3 of 5</h4>

        <div className="containerSearch">
            <input className="containerSearch__search" type="text" placeholder='Search...' onChange={handleSearch} />
            <div className="containerIcon">
                <BiSearchAlt className="containerIcon__icon"/>
            </div>
        </div>

        <List search={search} setTasks={setTasks} tasks={tasks}/>

    </section>
  )
}

export default ContainerList