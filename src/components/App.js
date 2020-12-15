import '../App.css';
import PropComponent from './PropComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {

  const orange = "Orange is here"


  return (
    <Router>
      <div className="App">
        <h1>App component</h1>
          <PropComponent name={"I am inside App Component"}/>
      </div>
    </Router>
  );
}

export default App;
