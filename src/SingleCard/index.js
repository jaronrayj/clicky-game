import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import "./style.css"

function SingleCard(props) {

    return (
        <Card>
            <Card.Content
                className="box"
                key={props.key}
                onClick={e => props.handleClick(e)}
                data-id={props.id}
            >

                <Image src={props.src}
                    data-id={props.id} />

            </Card.Content>
        </Card>
    )

}

export default SingleCard;

