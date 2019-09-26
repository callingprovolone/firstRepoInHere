import React from 'react';
import {
  Card, CardText, CardBody
} from 'reactstrap';
let tieWork = require("./tieWork.jpg");
let passport = require("./passport.jpg");
let phoneHands = require("./phoneHands.jpg");
let statueLiberty = require("./statueLiberty.jpg");
let shakingHands = require("./shakingHands.jpg");
let stocks = require("./stocks.jpg");

const Example = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-sm-6 marginCards">
          <a href="/Visas">
            <Card className="colorDarkGreen">
              <CardBody>
                <div className="card-img-caption card-img-top">
                  <p className="card-text whiteText cardTitle">Asistencia con <br />visas a USA</p>
                  <img top width="100%" src={passport} alt="Visas" ></img>
                </div>
                <CardText><br></br><h5>Asesoramiento de Inmigracion</h5>Te pondremos en contacto con abogados de inmigracion a EEUU.</CardText>
              </CardBody>
            </Card>
          </a>
          <br></br>
          <a href="/Negocios">
            <Card className="colorLightGreen">
              <CardBody>
                <div className="card-img-caption card-img-top">
                  <p className="card-text whiteText cardTitle">Como trabajar en<br /> Estados Unidos</p>
                  <img top width="100%" src={tieWork} alt="Trabajo" ></img>
                </div>
                <br />
                <CardText><br></br><h5>Hay mas oportunidades disponibles de las que crees para vivir y trabajar en Estados Unidos.</h5>Nosotros podemos ayudarte durante el complejo proceso para vivir y trabajar en Estados Unidos, abrir o invertir en un negocio alla o llevar tu propio negocio de Argentina.</CardText>
              </CardBody>
            </Card>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 marginCards">
          <a href="/Inversion">
            <Card className="colorPlatinum">
              <CardBody>
                <div className="card-img-caption card-img-top">
                  <p className="card-text whiteText cardTitle">Invierte en<br />USA</p>
                  <img top width="100%" src={stocks} alt="Invierte" ></img>
                </div>
              </CardBody>
            </Card>
          </a>
          <br />
          <a href="#acercaDe">
            <Card className="colorBrown">
              <CardBody>
                <div className="card-img-caption card-img-top">
                  <p className="card-text whiteText cardTitle">Acerca de<br /> nosotros</p>
                  <img top width="100%" src={shakingHands} alt="Acerca de" ></img>
                </div>
                <CardText><br></br><h5>Hay mas oportunidades disponibles de las que crees para vivir y trabajar en Estados Unidos.</h5>Nosotros podemos ayudarte durante el complejo proceso para vivir y trabajar en Estados Unidos, abrir o invertir en un negocio alla o llevar tu propio negocio de Argentina.<br /><br></br><p><h4>Con los mejores abogados y asesores</h4><h5>ayudamos a profesionales, expertos e inversionistas como tu, a emprender en </h5> Estados Unidos y aplicar a visas.</p></CardText>
              </CardBody>
            </Card>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 marginCards">
          <a href="/NegociosUsa">
            <Card className="colorPurpleGrey">
              <CardBody>
                <div className="card-img-caption card-img-top">
                  <p className="card-text whiteText cardTitle">LLeva tu negocio <br /> a USA</p>
                  <img top width="100%" src={statueLiberty} alt="Negocio en USA" ></img>
                </div>
                <CardText><br></br><h5>Para empresarios argentinos.</h5>Muchas empresas argentinas han tenido exito expandiendose al extranjero.<br />Te podemos asesorar en como hacerlo</CardText>
              </CardBody>
            </Card>
          </a>
          <br></br>
          <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
            <Card className="colorVividTangerine">
              <CardBody>
                <div className="card-img-caption">
                  <p className="card-text whiteText cardTitle">Contactanos<br /></p>
                  <img top width="100% card-img-top" src={phoneHands} alt="Contactanos" ></img>
                </div>
              </CardBody>
            </Card>
          </a>
        </div>
      </div>
      <div id="acercaDe"></div>
    </div>
  );
};

export default Example;