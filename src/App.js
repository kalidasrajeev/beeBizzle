import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './home'
import Filter from './FilterMob';
import Newhome from './newhome';
import Product from './product';
import Catergory from './categoryPage'; 
import Cart from './cartPage';

function App() {
  return (
    <Router>
          <Switch>
            <Route path='/search' component={Home} />
            <Route path='/filter' component={Filter} />
            <Route path='/home' component={Newhome} />
            <Route path='/product' component={Product} />
            <Route path='/category' component={Catergory} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </Router>

  );
}
export default App;
