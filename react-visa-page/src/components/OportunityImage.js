import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let tieWork = require("./tieWork.jpg");


const Example = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-5">

                    <Card>
                        <CardBody>
                            <h4>Oportunidad de abrir un negocio</h4>
                            <CardText>Existen maneras de vivir y trabajar en Estados Unidos al abrir tu propio negocio en el pais.<br />Ademas de haber visas para emprendedores, las hay para profesionales y personas de educacion o experiencia notables.<br /></CardText>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Para consultar cuales son tus posibilidades, contactanos y te informaremos:</h5>
                            </a>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                                <Button color="success">Contactar para mas informacion</Button>
                                </a>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-5">

                    <Card>
                        <CardImg top width="100%" src={tieWork} alt="Card image cap" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;