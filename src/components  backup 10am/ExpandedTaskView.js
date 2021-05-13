import {useContext} from 'react'
import {StateManager} from './StateManager'

const ExpandedTaskView = (task) => {
    const {tasks, state} = useContext(StateManager)
    const [taskList, setTasks] = tasks
    const [appState, setAppState] = state
    // const getSelectedTask = () => {
    //     taskList.map((t)=> {
    //         if (appState.selectedSubject == t.key){
    //             return t
    //         }
    //     })
    // }
    // const selectedTask = getSelectedTask
    return (
        <div>
            {console.log(appState.selectedTask)}
            <h1>{appState.selectedTask.title}</h1>
        </div>
    )
}

export default ExpandedTaskView
