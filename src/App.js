import { Switch, Route } from 'react-router-dom'
// Components
import Header from './Components/Header';
import Listado from './Components/Listado';
import Login from "./Components/Login";


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/listado' component={Listado}/>
      </Switch>
    </>

  );
}

export default App;
