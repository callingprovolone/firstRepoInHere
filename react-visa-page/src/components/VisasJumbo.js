import React from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UsaText from './UsaText';
import UsaImage from './UsaImage';
import Navbar from './Navbar';

class VisasJumbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="colorDarkGreen">
          <div className="jumbotron colorLightGreen">
            <h1 className="display-3">Quieres ayuda con tu visa?</h1>
            <h5 className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</h5>
            <hr className="my-2" />
            <h3>Podemos ponerte en contacto con un bufete de abogados que ya ha ayudado a ciudadanos argentinos a emprender y trabajar en USA.</h3>
            <p className="lead">
              <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
                  <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>
                  <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                    <ModalHeader>Nested Modal title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                      <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>      </p>
          </div>
          <UsaImage />
          <UsaText />
        </div>
      </div>
    );
  };
}
export default VisasJumbo;