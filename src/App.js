import React, {createRef} from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'

class App extends React.Component {
  contextRef = createRef()
  
  componentDidMount() {
    if (window.location.pathname === "/") {
      window.location.pathname = '/bio'
    }
  }
  render() {
    return (
      <div>
          <Header></Header>   
          <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
