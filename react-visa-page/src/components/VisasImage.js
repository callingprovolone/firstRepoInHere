import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let passport = require("./passport.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row paddingButtom">
            <div className="col-md-5 col-sm-7">

                    <Card>
                        <CardImg top width="100%" src={passport} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-md-6 col-sm-10">
                    <Card>
                        <CardBody>
                        <CardBody>
                            <h4>Hay muchos tipos de Visas o visados.</h4>
                            <CardText>Y no todas sirven para el mismo propósito. Algunas fueron concebidas para estudiantes, otras para que por interés nacional profesionales puedan ir a vivir y trabajar en USA. Además, existen programas para aquellos que tienen una capacidad de inversión elevada para que ellos y sus familias puedan trasladarse a USA, temporal o definitivamente. Algunos países, como Argentina tienen tratados que favorecen a pequeños inversores para que puedan abrir sus negocios en USA, al tiempo que sus familiares viven allí también. En definitiva, plantéanos tu caso y buscaremos la solución..<br /><br /></CardText>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Contáctanos y te informaremos de tus posibilidades:</h5>
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