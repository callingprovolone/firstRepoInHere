import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import VisasCards from './VisasText';
import VisasImage from './VisasImage';

const Example = (props) => {
  return (
    <div>
      <Jumbotron color="secondary">
        <h1 className="display-3">Te ayudamos a pedir visas</h1>
        <p className="lead">Contactanos y podemos empezar a trabajar juntos hacia un nuevo comienzo.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <VisasImage />
      <VisasCards />
    </div>
  );
};

export default Example;