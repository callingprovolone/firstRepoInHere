import React from 'react';
import { Button } from 'reactstrap';
import InversionImage from './InversionImage';
import Navbar from './Navbar';

class InversionJumbo extends React.Component {

  render() {
    return (
      <div className="colorDarkGreen">
        <Navbar />
        <div className="jumbotron colorSerpentGreen text-white">
          <h1 className="display-3">Inversiones en USA</h1>
          <br />
          <h3>Puedes aplicar a varios tipos de visados para E.E.U.U., si tienes intencion de invertir en una empresa americana.</h3>
          <h5>Hay muchos proyectos que califican para este tipo de visas, las inversiones varian de 100 mil dolares a 900 mil.</h5>
          <br />
          <hr className="my-2" />
          <h5>Si quieres oir mas acerca de este tipo de oportunidad, contactanos gratis y hablemos.</h5>
          <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
            <h2>Haz click aqui</h2>
            <br />
            <Button className="colorVividTangerine">Hablar acerca de esta oportunidad</Button>
          </a>
        </div>
        <InversionImage />
      </div>
    );
  };
}
export default InversionJumbo;