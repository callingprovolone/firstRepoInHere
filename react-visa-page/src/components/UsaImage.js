import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let newYork = require("./newYork.jpg")

const Example = (props) => {
    return (
        <div>
            <div className="row paddingButtom">
                <div className="col-md-5 col-sm-7">

                    <Card>
                        <CardImg top width="100%" src={newYork} alt="Card image cap" />
                    </Card>
                </div>
                <div className="col-md-5 col-sm-10">

                    <Card>
                        <CardBody>
                            <h4>Para empresarios:</h4>
                            <CardText>Si ya tuviste éxito con una idea que materializaste en un buen negocio, ¿por qué no internacionalizarte a uno de los países con mayor consumo y renta per cápita?.<br /></CardText>
                            <CardText>Generalmente pensamos que es un proceso complejo. Pero desde crear una corporación legal, abrir una cuenta, hacer un estudio de mercado, conseguir financiación, y lo mas importante ayudarte a encontrar los mejores franquiciados, en todo eso podemos serte de ayuda. Lo hemos hecho con éxito. Ahora podemos ayudarte a ti y a tu negocio.</CardText>
                            
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