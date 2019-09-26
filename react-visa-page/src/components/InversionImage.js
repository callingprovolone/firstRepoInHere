import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let stocks = require("./stocks.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-5">

                    <Card>
                    <CardBody>
                            <h4>Puedes invertir y ser considerado para una visa</h4>
                            <CardText>Existen maneras de vivir y trabajar en Estados Unidos al invertir o abrir tu propio negocio en el pais.<br />Si no conoces un proyecto ya en Estados Unidos, podemos conectarte con empresas en E.E.U.U.<br /></CardText>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Si quieres asegurarte, contactanos y te informaremos de cuales son tus posibilidades:</h5>
                            </a>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                                <Button color="primary">Contactar para mas informacion</Button>
                                </a>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-5">

                    <Card>
                    <CardImg top width="100%" src={stocks} alt="Card image cap" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;