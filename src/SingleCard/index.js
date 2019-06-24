import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import "./style.css"

function SingleCard(props) {

    return (
        <Card>
            <Card.Content
                className="box"
                key={props.key}
                onClick={props.cardCheck}>

                <Image src={props.src} />

            </Card.Content>
        </Card>
    )

}

export default SingleCard;

