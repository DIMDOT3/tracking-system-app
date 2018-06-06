import React, { Component } from 'react';
import projects from './seeds';
import './App.css';

// import components
import Navbar from './Navbar';
import OpenProjectsList from './OpenProjectsList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: projects});
  }
  render() {
    const currentProjects = this.state.projects;
    return (
        <div className="App">
          <Navbar />
          <OpenProjectsList currentProjects={currentProjects} />
        </div>
    );
  }
}

export default App;
