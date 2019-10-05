
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
let colomboHurd = require("./colomboHurd.PNG")
let bbGlobal = require("./bbGlobal.PNG")


const Example = (props) => {
    return (
        <div>
            <div className="row paddingButtom">
                <div className="col-md-5 col-sm-10">

                    <a href="https://bbglobalsolutions.com">
                        <Card>
                            <CardBody>
                                <CardImg top width="100%" src={bbGlobal} alt="Card image cap" />
                            </CardBody>
                        </Card>
                    </a>
                </div>
                <div className="col-md-5 col-sm-10">
                    <a href="https://www.colombohurdlaw.com/es/">
                        <Card>
                            <CardImg top width="100%" src={colomboHurd} alt="Card image cap" />
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Example