import React, { Component } from "react";
import ScoreBar from "./components/ScoreBar"
import PictureCard from "./components/PictureCard"
// import GridDiv from "./components/GridDiv"
import cardData from "./cardData.json"
import Jumbotron from "./components/Jumbotron";

class App extends Component {
    state = {
        currentScore: 0,
        highScore: 0,
        cardData,
        clicked: []
    }

    handleClick = (id) => {
        console.log(id)
        if (this.state.clicked.indexOf(id) === -1) {
            this.setState(
                {currentScore: this.state.currentScore + 1,
                clicked: this.state.clicked.concat(id)}, 
                function() {this.checkForHighScore()}
            )
        } else {
            this.handleScoreReset()
        }
        this.shuffle(cardData)
    };

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    handleScoreReset = () => {
        alert("Whoops! Back to 0...")
        this.setState(
            {currentScore: 0, clicked: [] }
        )
    };

    checkForHighScore = () => {
        if (this.state.currentScore > this.state.highScore) {
            console.log("new high score")
            this.setState({ highScore: this.state.currentScore})
        }
    }

    render() {
        return (
            <div>
                <ScoreBar currentScore={this.state.currentScore} highScore={this.state.highScore}></ScoreBar>
                <Jumbotron></Jumbotron>
                <div class="d-flex justify-content-center" style={{display: "flex", flexWrap: "wrap"}}>
                    {this.state.cardData.map( card => {
                        return (
                            <PictureCard 
                            key={card.id}
                            id={card.id}
                            src={card.src}
                            handleClick={this.handleClick}/>
                        )
                    })}
                </div>

            </div>
        )
    }
    
}

export default App;
