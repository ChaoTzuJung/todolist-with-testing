import { Switch, Route } from "react-router-dom"
import Banner from './components/Banner';
import TodoPage from './pages/Todo';
import FollowersPage from './pages/Followers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        <Route strict exact path="/followers" component={FollowersPage}/>
      </Switch>
    </div>
  );
}

export default App;
