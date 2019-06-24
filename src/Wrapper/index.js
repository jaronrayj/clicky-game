import React, { Component } from 'react'
import { Container, Card } from "semantic-ui-react"
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
            this.setState(state => {
                state.score++;
            });
        }
    }



    gameOver = () => {
        alert("You lose");
        this.setState(state => {
            state.cardChosen = []
        });
    }

    // randomUrl = () => {
    //     let random = 100 + Math.floor(Math.random() * 98)
    //     let url = `https://picsum.photos/id/${random}/200/200`
    //     return url;
    // }

    render() {
        return (
            <>
                <Score
                    score={this.state.score}
                    hiScore={this.state.hiScore} />
                <Container>
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
                </Container>
            </>
        )
    }
}

export default Wrapper;