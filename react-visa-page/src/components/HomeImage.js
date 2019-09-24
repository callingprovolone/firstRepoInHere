import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
let streetView = require("./streetView.jpg")
let airplane = require("./airplane.jpg")
let newYork = require("./newYork.jpg")
let desktop = require("./desktop.jpg")

const Example = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-sm-6 ">
          <Card>
            <img className="cardRounded" top width="100%" src={streetView} alt="Card image cap" ></img>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4 col-sm-6">
          <Card>
            <img className="cardRounded" top width="100%" src={newYork} alt="Card image cap" ></img>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4 col-sm-6">
          <Card>
            <img className="cardRounded" top width="100%" src={airplane} alt="Card image cap" ></img>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-6 col-sm-6 offset-md-3">
          <Card>
            <img className="cardRounded" top width="100%" src={desktop} alt="Card image cap" ></img>
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