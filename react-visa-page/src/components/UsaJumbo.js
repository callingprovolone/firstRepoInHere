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
          <h1 className="display-3">¿TIENES UN NEGOCIO QUE QUIERAS LLEVAR A USA?</h1>
          <br />
          <h3>Muchos empresarios argentinos han triunfado expandiendo sus empresas al mercado de USA..</h3>
          <h3>Si tu negocio ha triunfado en el modelo de franquicia localmente, ¿Por qué no llevarlo al mercado norteamericano?</h3>
          <h5>Imagínate expandiéndote a USA. Aunque puede parecer un proceso complejo, con la ayuda de los mejores abogados y profesionales que ya han demostrado su éxito, es posible.</h5>
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