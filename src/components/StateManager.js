import {createContext, useState} from 'react'

export const StateManager = createContext();
    
export const StateProvider = props  => {
    var d = new Date().toLocaleString()
    const [tasks, setTasks] = useState([
        {
            key: 1,
            "title": "Final Exam",
            "desciption": "Info1110 finals",
            "subject": 'INFO1110',
            "type": "Exam",
            "dateAdded": d,
            "reminder": true
        },
        {
            key: 2,
            "title": "Assessment 3",
            "desciption": "Create this webApp",
            "subject": "DECO2017",
            "type": "Assignment",
            "dateAdded": d,
            "reminder": true
        }
    ]);

    const [appState, setAppState]= useState({
        subjects: ['INFO1110', 'DECO3100', 'DECO3100'],
        taskTypes: ['Quiz', 'Exam', 'Presentation', 'Essay', 'Portfolio', 'Other'],
        selectedTask: {},
        home: true
    })
return (
        <StateManager.Provider value={{tasks:[tasks, setTasks],state:[appState, setAppState]}}>
            {props.children}
        </StateManager.Provider>
    )
}

