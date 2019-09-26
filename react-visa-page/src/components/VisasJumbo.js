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
            <h1>Quieres ayuda con tu visa?</h1>
            <br />
            <h5>Conseguir una visa de trabajo en Estados Unidos es complicado.</h5>
            <hr className="my-2" />
            <h3>Podemos ponerte en contacto con un bufete de abogados que ya ha ayudado a ciudadanos argentinos a emprender y trabajar en USA.</h3>
            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">

              <p className="lead">Haz click aqui para descubrir si puedes aplicar para una visa</p>
              <Button className="colorDarkBlue">Conseguir ayuda ahora</Button>
            </a>
          </div>
          <VisasImage />
        </div>
      </div>
    );
  };
}
export default VisasJumbo;