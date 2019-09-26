import React from 'react';
import { Button } from 'reactstrap';
import OportunityImage from './OportunityImage';
import Navbar from './Navbar';



class OportunityJumbo extends React.Component {

  render() {
    return (
      <div className="colorPearlAqua">
        <Navbar />
        <div className="jumbotron colorDarkGreen">
          <h1 className="display-3">Oportunidades de negocio</h1>
          <br />
          <h4>Si eres un profesional con estudios o experiencia, o un emprendedor queriendo abrir un negocio a Estados Unidos, podemos ayudarte a vivir y trabajar alli.</h4><br />
          <p className="lead">Te podemos poner en contacto con abogados de inmigracion, y asesorarte en las posibilidades de trabajo, inversion y negocio que tienes disponibles.</p>
          <br />          <hr className="my-2"></hr>
          <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">

            <h2>Contactanos gratis aqui, y descubre que posibilidades existen.</h2>
            <br />
            <Button color="primary">Click para oportunidades de negocio</Button>
          </a>
        </div>
        <OportunityImage />
      </div>
    );
  };
}
export default OportunityJumbo;