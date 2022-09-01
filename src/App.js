import './App.scss';

//components
import Container from './components/Container/Container';
import ContainerNewTask from './components/ContainerNewTask/ContainerNewTask';
import ContainerList from './components/ContainerList/ContainerList';

import React, { useState } from 'react';

// function useLocalStorage () {
// }

function App() {
    const [tasks, setTasks] = useState([]);


    console.log(localStorage)
    return (
        <>
            <Container>
                <div className='container-wrap'>
                    <ContainerNewTask setTasks={setTasks} tasks={tasks} />
                    <ContainerList setTasks={setTasks} tasks={tasks} />
                </div>
            </Container>
        </>


    );
}

export default App;
