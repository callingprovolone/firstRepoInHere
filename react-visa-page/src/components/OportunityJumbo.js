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
          <h1 className="display-3">OPORTUNIDADES DE NEGOCIO</h1>
          <br />
          <h4>Si eres un emprendedor con ganas de abrir tu propio negocio en un mercado mas estable y con alta capacidad de consumo, gran renta per cápita y bajos intereses, es el momento de abrir tu propio negocio en USA. Además, puede ayudarte a conseguir tu visa para ti y tu familia directa..</h4><br />
          <p className="lead">Si tu negocio ha triunfado en el modelo de franquicia localmente, ¿Por qué no llevarlo al mercado norteamericano?.</p>
          <p className="lead">Imagínate expandiéndote a USA. Aunque puede parecer un proceso complejo, con la ayuda de los mejores abogados y profesionales que ya han demostrado su éxito, es posible.</p>
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