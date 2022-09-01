import React from 'react'
import './TaskCounter.scss'

const TaskCounter = ({countTask, totalTasks}) => {
  return (
    <h4 className="containerList__progress">Completed {countTask} of {totalTasks}</h4>

  )
}

export default TaskCounter