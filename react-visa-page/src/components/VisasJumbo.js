import React from 'react';
import { Button } from 'reactstrap';
import VisasImage from './VisasImage';
import Navbar from './Navbar';

class VisasJumbo extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="colorDarkGreen">
          <div className="jumbotron colorLightGreen">
            <h1>¿Estás pensando en emprender una nueva vida en USA?</h1>
            <br />
            <h5>En el último año el número de argentinos que quieren mudarse para los Estados Unidos ha aumentado drásticamente.</h5>
            <hr className="my-2" />
            <h3>Te ofrecemos asesoramiento legal gratuito con la firma de abogados premiada como la mejor en Inmigración..</h3>
            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">

              <p className="lead">Haz click aquí para descubrir si eres un candidato para vivir y trabajar en USA</p>
              <Button className="colorDarkBlue">Pide una cita gratuita</Button>
            </a>
          </div>
          <VisasImage />
        </div>
      </div>
    );
  };
}
export default VisasJumbo;