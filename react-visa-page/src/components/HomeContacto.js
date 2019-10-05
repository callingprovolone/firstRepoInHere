import React from 'react';
import {
    Card, CardImg, Jumbotron, Button
} from 'reactstrap';



const Example = (props) => {
    return (
        <div id="siTeRegistraste">
            <Jumbotron className="colorDarkGrey">
                <h1 className="display-3">Si te registraste para recibir mas información, recibirás un email en breve.</h1>
                <h3>Además puedes ponerte en contacto con nosotros directamente al +1 (407)-669-7503 si quieres atender nuestro seminario el 10 de este mes.</h3>
                <hr className="my-2" />                
            </Jumbotron>
        </div>
    );
};

export default Example