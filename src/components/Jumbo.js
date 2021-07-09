import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export class Jumbo extends Component {
    render() {
        return (
            <>
                <Card className="text-center custom-secondary" text="light">
                    <Card.Body>
                    <Card.Title>Aquilla</Card.Title>
                    <Card.Text>
                        Developing web apps using Django, ReactJS{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Jumbo
