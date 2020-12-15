import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CreateExercise from './CreateExercise';
import ExerciseList from './ExerciseList';
import EditExercise from './EditExercise';
import CreateUser from './CreateUser';
import Navbar from './Navbar'


function App() {

  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
