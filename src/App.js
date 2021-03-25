import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './home'
import Filter from './FilterMob';
function App() {
  return (
    <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/filter' component={Filter} />
          </Switch>
        </Router>

  );
}
export default App;
