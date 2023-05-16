import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormManagement from './pages/FormManagement/FormManagement';
import { useState } from 'react';
function App() {
  const [showAddStudentButton, setShowAddStudentButton] = useState(true);

  const handleEditButtonClick = () => {
    setShowAddStudentButton(false);
  };
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route exact path={'/form-management'} component={FormManagement} />
          <Route path={'/'} component={FormManagement}
            showAddStudentButton={showAddStudentButton}
            onEdit={handleEditButtonClick} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
