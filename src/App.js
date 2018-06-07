import React, { Component } from 'react';
import projects from './seeds';
import { connect } from 'react-redux';
import './App.css';

// import components
import Navbar from './Navbar';
import ProjectList from './ProjectList';

class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   projects: []
    // }
  }

  // componentWillMount(){
  //   this.setState({projects: projects});
  // }
  render() {
    return (
        <div className="App">
          <Navbar />
          <ProjectList />
        </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    projects: reduxState.projects
  };
}

export default App;


