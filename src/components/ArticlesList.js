import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export class ArticlesList extends Component {
    articlesList=[1,2,3,4,5,6]
    render() {
        return (
            <Container>
                <Row className="justify-content-xs-center">
                    {
                        this.articlesList.map(item=>{
                          return ( <Col  md={{ span: 6, offset: 3 }} className='mb-2 mt-2'>
                            <Card>
                            <Card.Body><h1>This is some text within a card body.</h1></Card.Body>
                            <Card.Footer><small>7/2/2021</small></Card.Footer>
                            </Card>
                            </Col>)
                        })
                    }

                </Row>
            </Container>
        )
    }
}

export default ArticlesList
