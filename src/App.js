import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormManagement from './pages/FormManagement/FormManagement';
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route exact path={'/form-management'} component={FormManagement} />
          <Route path={'/'} component={FormManagement} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
