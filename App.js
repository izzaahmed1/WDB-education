import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//The line above imports all the necessary css files similar to the way done in html.
//Imports in React are neccessary whenever you want to reference an outside file or library.
import Feed from './Components/Feed'
import { Navbar , Nav, NavDropdown} from 'react-bootstrap';
// Import Bootstrap Navigation Bar HERE 
// Remember that it should be used as a React Component



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Nav></Nav>
      <NavDropdown></NavDropdown>
      <h1>Blockstagram</h1>
      <Feed></Feed>
    </div>
  );
}

export default App;
