import {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {StateManager} from './StateManager'
import RenderMain from './RenderMain'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




export default function Task ({click, task}) {
  const classes = useStyles();
  const {tasks, state} = useContext(StateManager)
  const [taskList, setTasks] = tasks
  const [appState, setAppState] = state




  return (
 
      <div>

        <Card className={classes.root} style={{backgroundColor: 'rgb(250,250,250)'}} variant="outlined">
        <CardContent>
            <Typography className={classes.title} gutterBottom>
            Title:
            </Typography>
            <Typography variant="h5" component="h2">
            {task.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {task.type}
            </Typography>
            <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>(click(task))} size="small" display='contained' color={'primary'}>Open</Button>
        </CardActions>
        </Card>
    </div>
  );
}