import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let tieWork = require("./tieWork.jpg");


const Example = (props) => {
    return (
        <div>
            <div className="row paddingButtom">
            <div className="col-md-6 col-sm-10">

                    <Card>
                        <CardBody>
                            <h4>Para empresarios:</h4>
                            <CardText>Si tienes una capacidad de inversión entre 100,000 y 250,000 dólares, pero no sabes todavía en qué tipo de negocio invertir, déjanos presentarte las opciones que tenemos. Han ayudado a otros como tu a empezar una nueva vida en USA. No es cierto que para conseguir vivir y trabajar en USA haya que hacer grandes inversiones inmobiliarias o en negocios. Las opciones son diversas. Lo mejor es dejarse asesorar por quienes saben y no equivocarse en esta importante decisión. Lo que a otros ha funcionado puede que no funcione para vos. Estamos para ayudart.<br /></CardText>

                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Para consultar cuales son tus posibilidades, contactanos y te informaremos:</h5>
                            </a>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                                <Button color="success">Contactar para mas informacion</Button>
                                </a>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-5 col-sm-7">

                    <Card>
                        <CardImg top width="100%" src={tieWork} alt="Card image cap" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;