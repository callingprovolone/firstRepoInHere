
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let newYork = require("./newYork.jpg")


const Example = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-9 offset-sm-2">

                    <Card>
                        <img top width="100%" src={newYork} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example