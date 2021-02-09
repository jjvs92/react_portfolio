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
  render() {
        const gitLink= "https://github.com/jjvs92";
        const linkedInLink = "www.linkedin.com/in/julian-villarreal-706932123";
      const openLink = (url) => {
            window.open(url);
      }
        return (
          <div>

            <Header/>
            <Image ProfileImage={ProfileImage}/>
            <Bio/>
            <HouseApps>
              <CreatedApps
                CrystalImage={CrystalImage}
                TriviaImage={TriviaImage}
                OddSharkImage={OddSharkImage}
                MemoryImage={MemoryImage}
                CampingImage={CampingImage}
                />
            </HouseApps>
            <ConnectMe
              emailIcon={emailIcon}
              gitIcon={gitIcon}
              openLink={openLink}
              gitLink={gitLink}
              linkedIn={linkedIn}
              linkedInLink={linkedInLink}/>
            <Footer/>
          </div>
        );
  }
}

export default App;
