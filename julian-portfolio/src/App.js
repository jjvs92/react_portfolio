import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Image from "./components/image";
import ProfileImage from "./components/assets/images/profile_image.png";
import Bio from "./components/bio";
import CreatedApps from "./components/created-apps";
import myApps from "./projects.json"
import HouseApps from "./components/housed-apps";
import CrystalImage from "./components/assets/images/crystal-collector.png";

class App extends Component {
  state = {
    ProfileImage,
    myApps,
    CrystalImage
  };

  render() {
    return (
      <div>

        <Header/>
        <Image ProfileImage={this.state.ProfileImage}/>     
        <Bio/> 
        <HouseApps>
          <CreatedApps CrystalImage={this.state.CrystalImage}/>
        </HouseApps>
          
      </div>
    );
  }
}

export default App;
