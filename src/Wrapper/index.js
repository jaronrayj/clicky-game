import React, { Component } from 'react'
import { Container, Card, Label } from "semantic-ui-react"
import "./style.css"
import SingleCard from "../SingleCard";
import shuffle from 'shuffle-array'
import images from "../images.json"
import Score from '../Score'

class Wrapper extends Component {
    state = {
        score: 0,
        cardChosen: [],
        hiScore: 0
    };

    randomOrder = array => {
        const newArray = shuffle(array);
        return newArray;
    }

    handleClick = (event) => {
        let cardId = event.target.getAttribute("data-id");
        if (this.state.cardChosen.includes(cardId)) {
            this.gameOver();
        } else {
            this.state.cardChosen.push(cardId);
            let newScore = this.state.score + 1
            if (this.state.hiScore <= this.state.score) {
                this.setState({
                    score: newScore,
                    hiScore: newScore
                });
                if (this.state.score === images.length) {
                    alert("You win!")
                    this.gameOver();
                }
            } else {
                this.setState({
                    score: this.state.score + 1
                })
            }


        }
    }



    gameOver = () => {
        alert("You lose");
        this.setState({
            cardChosen: [],
            score: 0
        }
        );
    }



    render() {
        return (
            <>
                <Score
                    score={this.state.score}
                    hiScore={this.state.hiScore} />
                <Container className="mainBox">
                    <Card.Group itemsPerRow={5}>
                        {this.randomOrder(images).map(img =>
                            <>
                                <SingleCard
                                    src={img.img}
                                    handleClick={this.handleClick}
                                    id={img.id} />
                            </>
                        )}
                    </Card.Group>
                        <Label className="center"> 
                            <h3>Pick an image! Don't pick the same one twice, or else you lose.</h3>
                        </Label>
                </Container>
            </>
        )
    }
}

export default Wrapper;