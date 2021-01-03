import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Profile from './assets/profile.png';


class App extends Component{
  state = { displayBio:  false}

  // constructor(){
  //   super();
  //   this.state = { displayBio: false};
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render(){
    return (
      <div>
      <img src={Profile} alt='Profile' />
      <div>
      <h1>Hello</h1>
      <p> I'm here to learn </p>
      </div>

      { this.state.displayBio ? (<div>
      <p> I am very pationate with React</p>
      <button onClick={this.toggleDisplayBio}> Show less </button>
      </div>) : (<div>
                  <button onClick={this.toggleDisplayBio}> Read more </button>
                  </div>) }

      <hr />
      <Projects />
      <hr />
      <SocialProfiles />
      </div>)
  }
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         React app is here
//       </header>
//     </div>
//   );
// }

// export default App;
