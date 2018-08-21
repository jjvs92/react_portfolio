import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Image from "./components/image";
import ProfileImage from "./components/assets/images/profile_image.png";
import Bio from "./components/bio";
import CreatedApps from "./components/created-apps";
import Footer from "./components/footer";
import HouseApps from "./components/housed-apps";
import CrystalImage from "./components/assets/images/crystal-collector.png";
import TriviaImage from "./components/assets/images/trivia_game.png";
import OddSharkImage from "./components/assets/images/odds-shark.png";
import MemoryImage from "./components/assets/images/memory-game.png";
import CampingImage from "./components/assets/images/camping_image.png";
import ConnectMe from "./components/connectme";
import emailIcon from "./components/assets/images/email-icon.png";
import gitIcon from "./components/assets/images/github-icon.png";
import linkedIn from "./components/assets/images/linked-in.png";

class App extends Component {
  state = {
    ProfileImage,
    CrystalImage,
    TriviaImage,
    OddSharkImage,
    MemoryImage,
    CampingImage,
    emailIcon,
    gitIcon,
    linkedIn
  };

   openApp = event =>{

  }

  render() {
    return (
      <div>

        <Header/>   
        <Image ProfileImage={this.state.ProfileImage}/>          
        <Bio/> 
        <HouseApps>
          <CreatedApps 
            CrystalImage={this.state.CrystalImage}
            TriviaImage={this.state.TriviaImage}
            OddSharkImage={this.state.OddSharkImage}
            MemoryImage={this.state.MemoryImage}
            CampingImage={this.state.CampingImage}
            />
        </HouseApps>
        <ConnectMe
          emailIcon={this.state.emailIcon}
          gitIcon={this.state.gitIcon}
          linkedIn={this.state.linkedIn}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
