import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let desktop = require("./desktop.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-8">

                    <Card>
                        <CardImg top width="100%" src={desktop} alt="Card image cap" />
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

export default Example;