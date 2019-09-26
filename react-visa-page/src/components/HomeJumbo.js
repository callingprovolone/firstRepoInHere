import React from 'react';
import { Jumbotron, Button, CardImg, Card } from 'reactstrap';
import HomeImage from './HomeImage';
import HomeAcercaCard from './HomeAcercaCard';
import Logo from './Logo.png';

const Example = (props) => {
  return (
    <div className="colorPearlAqua">
      <HomeImage />
      <div className="row">
        <div className="col-md-7">
          <Jumbotron className="colorDarkGrey">
            <h1 className="display-3">Acerca de nosotros</h1>
            <h4 className="lead">Somos un grupo de consultores y abogados, especializados en negocios e inmigracion a USA.</h4>
            <hr className="my-2" />
            <h5>Queremos conectar a argentinos con oportunidades de desarrollo y crecimiento en Estados Unidos.</h5>
            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
              <p className="lead">
                Si podemos ayudarte, habla con nosotros:
               </p>
              <Button color="success">Ponerse en contacto con nosotros</Button>
            </a>
          </Jumbotron>

        </div>
        <div className="col-md-5">
          <Card className="colorVividTangerine">
          <CardImg src={Logo} alt="Card image cap" />
</Card>
        </div>
      </div>
      <HomeAcercaCard />
    </div >
  );
};

export default Example;