import React, {Component} from 'react';
import './App.scss';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Logo/>
        {/*<ImageLinkForm />*/}
        {/*<FaceRecognition />*/}
      </div>
    )
  }
}

export default App;
