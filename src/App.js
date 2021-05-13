import './components/App.css'
import NavBar from './components/NavBar'
import {StateProvider} from './components/StateManager'
import RenderMain from './components/RenderMain'

export default function App() {

  return (
    <div>
      <StateProvider>

        <RenderMain/>
      </StateProvider>
    </div>
  );
}

