import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let newYork = require("./newYork.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-5">

                    <Card>
                        <CardImg top width="100%" src={newYork} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-5">

                    <Card>
                        <CardBody>
                            <h4>Para emprendedores</h4>
                            <CardText>Varias visas a Estados Unidos aplican a Argentinos que quieran posicionarse en ese mercado.<br />Con la mayor economia mundial, es un pais que ha brindado oportunidades a muchos empresarios Argentinos.<br /></CardText>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Si tienes un negocio y esto te parece interesante, click aqui:</h5>
                            </a>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                                <Button color="primary">Contactar para mas informacion</Button>
                                </a>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;