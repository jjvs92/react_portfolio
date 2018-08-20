import React from "react";
import "./assets/css/createdapps.css";

const CreatedApps = props => 
    <div className="row">
        <div className="col-md-4"> 

            <div class="card appCard" styles="width: 18rem;">
                <img class="card-img-top appImage" src={props.CrystalImage} alt="Card image cap"/>
                <div class="card-body cardLinks">
                    <h5 className="appTitle"> Crystal Collector</h5>
                    <p class="card-text">Technologies used: Javascript, CSS, HTML</p>
                    <a href="https://jjvs92.github.io/unit-4-game" target="_blank">Crystal Collector</a> <br/>
                    <a href="https://github.com/jjvs92/unit-4-game" target="_blank">Git repo</a>

                </div>
            </div>    
        
        </div>

        <div className="col-md-4"> 

            <div class="card appCard" styles="width: 18rem;">
                <img class="card-img-top appImage" src={props.TriviaImage} alt="Card image cap"/>
                <div class="card-body cardLinks">
                    <h5 className="appTitle">Friends Trivia Game</h5>
                    <p class="card-text">Technologies used: Javascript, CSS, HTML</p>
                    <a href="https://jjvs92.github.io/TriviaGame" target="_blank">Friends Trivia Game</a> <br/>
                    <a href="https://github.com/jjvs92/TriviaGame" target="_blank">Git repo</a>

                </div>
            </div>   
        
         </div>

        <div className="col-md-4"> 

            <div class="card appCard" styles="width: 18rem;">
                <img class="card-img-top appImage" src={props.CampingImage} alt="Card image cap"/>
                <div class="card-body cardLinks">
                    <h5 className="appTitle">Camping App</h5>
                    <p class="card-text">Technologies used: HTML, CSS, jQuery, JavaScript, API, Materialize, Bootstrap, Affinity Photo</p>
                    <a href="https://jjvs92.github.io/group-project1" target="_blank">Camping App</a> <br/>
                    <a href="https://github.com/jjvs92/group-project1" target="_blank">Git repo</a>

                </div>
            </div>   

        </div>      

        <div className="col-md-4"> 

            <div class="card appCard" styles="width: 18rem;">
                <img class="card-img-top appImage" src={props.MemoryImage} alt="Card image cap"/>
                <div class="card-body cardLinks">
                    <h5 className="appTitle"> Memory Game</h5>
                    <p class="card-text">Technologies used: React JS, Bootstrap, Javascript, CSS, HTML</p>
                    <a href="https://jjvs92.github.io/memory-game" target="_blank">Memory Game</a> <br/>
                    <a href="https://github.com/jjvs92/memory-game" target="_blank">Git repo</a>

                </div>
            </div>   

        </div>   

        <div className="col-md-4"> 

            <div class="card appCard" styles="width: 18rem;">
                <img class="card-img-top appImage" src={props.OddSharkImage} alt="Card image cap"/>
                <div class="card-body cardLinks">
                    <h5 className="appTitle">Odds Shark</h5>
                    <p class="card-text">Technologies used: Express, Bootstrap, Node, MySQL, Javascript, CSS, HTML</p>
                    <a href="https://ancient-sands-68942.herokuapp.com" target="_blank">Odds Shark</a> <br/>
                    <a href="https://github.com/jjvs92/Project_2" target="_blank">Git repo</a>

                </div>
            </div>   

        </div>  
                   
    </div>



    

export default CreatedApps;