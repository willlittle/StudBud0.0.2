import React,{useContext, useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';
import {StateManager} from './StateManager'




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function FormPropsTextFields({submit}) {
  const classes = useStyles();
  const {tasks, state} = useContext(StateManager)
  const [appState, setAppState] = state

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subject, setSubject] = useState('')


  return (
    <div>
        <h1 >Add Task</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e)=>(setTitle(e.target.value))}/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={(e)=>(setDescription(e.target.value))}/>
            </div>
            <div>
              <TextField
                value={subject} 
                onChange={(e)=>(setSubject(e.target.value))}
                id="standard-select-currency"
                select
                label="Select"


                helperText="Please select your currency"
              >
                {appState.subjects.map((subject) => (
                  <MenuItem  value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Button onClick={()=>(submit(title, description, subject))}>Submit</Button>
        </form>
    </div>
    
  );
}