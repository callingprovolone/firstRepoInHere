import React from 'react';
import { Button } from 'reactstrap';
import UsaImage from './UsaImage';
import Navbar from './Navbar';

class UsaJumbo extends React.Component {
  render() {
    return (
      <div className="colorDarkCyan">
        <Navbar />
        <div className="jumbotron colorPlatinum">
          <h1 className="display-3">Tienes un negocio que quieras llevar a USA?</h1>
          <br />
          <h3>Muchos empresarios argentinos han triunfado expandiendo sus empresas al mercado de Estados Unidos.</h3>
          <h3>Aun si no tienes un negocio propio, podemos ayudarte a encontrar y montar uno.</h3>
          <h5>Imaginate emprendiendo tu negocio en USA. Aunque es un proceso complejo, con la ayuda de los mejores abogados y un equipo de profesionales asistiendote, es posible.</h5>
          <br />
          <hr className="my-2" />
          <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
          <h2>Click aqui para ver que posibilidades tienes a tu disposicion:</h2>
          <br />
            <Button className="colorDarkBlue">Asistencia con tu negocio</Button>
          </a>
        </div>
        <UsaImage />
      </div>
    );
  };
}
export default UsaJumbo;