import React from 'react';
import {Card, Button} from 'react-bootstrap';
const News = (props) => {
    console.log(props.article);
    const {title, description, url, urlToImage} = props.article;
    return (
        <Card style={{ width: '18rem' }} className='col-md-4'>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;