import {Route, Switch} from 'react-router-dom';
import Home from './component/Home/Home';
import MovieDetail from './component/MovieDetail/MovieDetail';

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetail} exact />
      </Switch>
    </main>
  );
}

export default App;
