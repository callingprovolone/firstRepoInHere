import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import HomeImage from './HomeImage';
import HomeReading from './HomeReading';
import HomeAcercaCard from './HomeAcercaCard';

const Example = (props) => {
  return (
    <div>
      <HomeImage />
      <Jumbotron>
        <h1 className="display-3">Home Welcome</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary" className="margin-button"> Learn More</Button>
          <Button color="success" className="margin-button"> Learn More</Button>
          <Button color="warning" className="margin-button"> Learn More</Button>

        </p>
      </Jumbotron>
      <HomeAcercaCard />
      <HomeReading />
    </div>
  );
};

export default Example;