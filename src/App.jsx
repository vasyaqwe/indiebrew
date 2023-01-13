import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route path='/signup'><SignUp /></Route>
    </Switch>
  )
}

export default App
