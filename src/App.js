// Libraries
import { Switch, Route } from 'react-router-dom'
// Components
import Header from './Components/Header';
import Listado from './Components/Listado';
import Login from "./Components/Login";
import Footer from './Components/Footer';

// Styles
import '../src/styles/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header/>
      <div className='container mt-3'>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/listado' component={Listado}/>
        </Switch>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
