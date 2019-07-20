import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: "Rizky"
  }

  usernameChange = (event) => {
    this.setState({ username: event.target.value });

  }

  render() {
    return(
      <div className="App">
        <h1>Exercise 1</h1>
        <UserInput change={ this.usernameChange } current={ this.state.username } />
        <UserOutput username={ this.state.username } />
        <UserOutput username={ this.state.username } />
        <UserOutput username={ this.state.username } />
      </div>
    );
  }
    
}

export default App;
