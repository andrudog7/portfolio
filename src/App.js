import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        {/* <Home></Home>
        <Projects></Projects>
        <BlogPosts></BlogPosts>
        <Contact></Contact> */}
      </div>
    );
  }
}

export default App;
