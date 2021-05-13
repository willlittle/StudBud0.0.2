import {useContext, useState, useEffect} from 'react'
import TaskList from './TaskList'
import ExpandedTaskView from './ExpandedTaskView'
import {StateManager} from './StateManager'
import NavBar from './NavBar'



const RenderMain = () => {
    
    const {tasks, state} = useContext(StateManager)
    const [taskList, setTasks] = tasks
    const [appState, setAppState] = state

    const navToTask = (t) =>{
        const state = appState
        state.home = false
        state.selectedTask = t
        console.log(state.selectedTask)
        setAppState(state)
        console.log(t)
        setTest(test+1)
    }

    const addTask = (title, description, subject) => {
        const newKey = tasks.length +1
        const d = new Date().toLocaleString()
        const newTask = [newKey, title, description,subject, 'exam', d]
        setTasks([...taskList, newTask])

    }
        
    const handleBack =  () =>{
        const state = appState
        state.home = true
        state.selectedTask = false
        setAppState(state)
        setTest(test+1)
    }

    const [test, setTest] = useState(0)



    const contentSwitcher = () =>{
        switch(appState.home){
            case true:
                 return  <TaskList click={navToTask} />
            case false:
                
                return  <ExpandedTaskView/>
        }
    }

    return (
        <>
        <NavBar back={handleBack} submit={addTask}/>
        {contentSwitcher()}
     
        </>
    )
}

export default RenderMain


// console.log(appState.selectedSubject)
// const onChange = (t) =>{
//     const state = appState
//     state.home = false
//     state.selectedTask = t
//     console.log(state.selectedTask)
//     setAppState(state)
//     console.log(t)
//     setTest(test+1)
// }
// const [test, setTest] = useState(0)