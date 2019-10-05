import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let stocks = require("./stocks.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row paddingButtom">
            <div className="col-md-6 col-sm-10">

                    <Card>
                    <CardBody>
                            <h4>Puedes invertir y ser considerado para una Visa.</h4>
                            <CardText>Algunas personas piensan que se necesitan inversiones muy grandes para poder emprender un negocio en USA y a la vez, ser considerado para una visa. Eso no es del todo cierto. La visa Eb5 que otorga la residencia directa para el inversionista y su familia directa, tiene una inversión mínima de 500,000 dólares en alguno de los proyectos aprobados. Ahora ese monto va a ser elevado a 900,000 dólares antes de fin de año.

Pero Argentina tiene un tratado con USA para la visa de inversionista E2, que requiere montos de inversión sensiblemente inferiores. La mayoría de los argentinos que optan por esta vía suelen invertir entre 100 y 200.000 dólares en pequeños negocios o franquicias. Muchas de las cadenas de franquicias mas exitosas de Argentina ya son nuestros clientes y ofrecen tratos muy preferenciales, aunque también tenemos otras cadenas americanas deseosas de tener entre sus franquiciados a mas y mas argentinos emprendedores..<br /></CardText>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                            <h5>Si quieres oír mas acerca de este tipo de oportunidad, contáctanos gratis y hablemos:</h5>
                            </a>
                            <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                                <Button color="primary">Hace click acá</Button>
                                </a>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-5 col-sm-7">

                    <Card>
                    <CardImg top width="100%" src={stocks} alt="Card image cap" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;