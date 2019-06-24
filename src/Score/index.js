import React from 'react';
import { Menu, Container } from 'semantic-ui-react'

function Score(props) {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <h1>Memory Game</h1>
                </Menu.Item>

                <Menu.Item>Score: {props.score}</Menu.Item>
                <Menu.Item>Hi Score: {props.hiScore}</Menu.Item>
            </Container>
        </Menu>

    )
}

export default Score;