import React, { Component } from 'react'
import { Container, Card } from "semantic-ui-react"
import "./style.css"
import SingleCard from "../SingleCard";
import shuffle from 'shuffle-array'
import images from "../images.json"

class Wrapper extends Component {
    state = {
        score: 0,
        cardChosen: []
    };

    randomOrder = array => {
        const newArray = shuffle(array);

        return newArray;
    }

    cardCheck = color => {

        console.log(color);


    }

    render() {
        return (
            <Container>
                <Card.Group itemsPerRow={5}>
                    {this.randomOrder(images).map(img =>
                        <>
                            <SingleCard src={img.src} key={img.id} />
                            {/* cardCheck={this.cardCheck({ img.id })} /> */}
                        </>
                    )}
                </Card.Group>
            </Container>
        )
    }
}

export default Wrapper;