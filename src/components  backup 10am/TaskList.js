import {useContext} from 'react'
import {StateManager} from './StateManager'
import Task from './Task'
import'./App.css'


const TaskList = ({click}) => {
    const {tasks, appState} = useContext(StateManager)
    const [taskList, setTasks] = tasks
    
    return (
        <div className='tasksContainer'>
            <div className='task'>
                {taskList.map((t) => (
                <Task  click={click} task={t}/>
                ))}
            </div>
        </div>
    )
}

export default TaskList
