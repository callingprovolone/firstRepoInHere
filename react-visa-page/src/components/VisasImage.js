import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let passport = require("./passport.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-5">

                    <Card>
                        <CardImg top width="100%" src={passport} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-7">
                    <Card>
                        <CardBody>
                        <CardBody>
                            <h4>Hay muchos tipos de Visas</h4>
                            <CardText>Algunas estan al alcance de profesionales, personas con logros notables, empresarios, especialistas e inversores.<br />Si alguna de estas palabras te define, puede ser que cumplas los requisitos para aplicar a una visa estadounidense.<br /><br /></CardText>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Si quieres asegurarte, contactanos y te informaremos de cuales son tus posibilidades:</h5>
                            </a>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                                <Button color="primary">Contactar para mas informacion</Button>
                                </a>
                        </CardBody>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;