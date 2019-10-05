import React, { Component } from 'react';
import { Jumbotron, Button, CardImg, Card, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import HomeImage from './HomeImage';
import HomeAcercaCard from './HomeAcercaCard';
import HomeContacto from './HomeContacto';
import Logo from './Logo.png';
import SecondLogo from './SecondLogo.svg';
import modalColombo from './modalColombo.JPG';


class Example extends Component {
  componentDidMount() {
    this.toggle();
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
    return (
      <div className="colorPearlAqua">
        <HomeImage />
        <div className="row paddingButtom">
          <div className="col-md-8">
            <Jumbotron className="colorDarkGrey">
              <div className="col-md-5">
                <Card className="colorVividTangerine">
                  <CardImg src={Logo} alt="Card image cap" />
                </Card>
              </div>
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
          <div className="col-md-4">
            <Card className="colorVividTangerine">
              <CardImg src={SecondLogo} alt="Card image cap" />
            </Card>
          </div>
        </div>
        <HomeContacto />
        <HomeAcercaCard />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Seminario de Visas</ModalHeader>
          <ModalBody>
            <Card className="colorVividTangerine">
              <CardImg src={modalColombo} alt="Card image cap" />
            </Card>
            <h4>Seminario gratuito el 10/10 a las 19hrs</h4>
            <p></p>
            <h6>Confirmar asistencia a:</h6>
            <p>+1 (407)-669-7503</p>
            <p>info@abogadocolombo.com</p>
            <p>Danos tu informacion o contactanos directamente al telefono/whatsapp o email.</p>

          </ModalBody>
          <ModalFooter>
            <h5>Click aca para que nos pongamos en contacto con vos</h5>
            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
              <Button color="primary" className="text-white">Contactarnos</Button>
            </a>
            <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
};

export default Example;