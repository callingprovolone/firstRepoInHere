import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import OportunityImage from './OportunityImage';
import Navbar from './Navbar';


const FormBody = (props) => {
    return (
        <div id="mc_embed_signup">
            <form action="https://gmail.us20.list-manage.com/subscribe/post?u=90e3191df08962f516f427f26&amp;id=5a355519bf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group">
                        <label for="mce-EMAIL">Email  <span className="asterisk">*</span>
                        </label>
                        <input type="email" value="hola" name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div className="mc-field-group input-group">
                        <strong>Que tipo de servicios le interesan? </strong>
                        <ul><li><input type="checkbox" value="1" name="group[3659][1]" id="mce-group[3659]-3659-0" ></input><label for="mce-group[3659]-3659-0">Asistencia con visas</label></li>
                            <li><input type="checkbox" value="2" name="group[3659][2]" id="mce-group[3659]-3659-1"></input><label for="mce-group[3659]-3659-1">Trabajar en USA</label></li>
                            <li><input type="checkbox" value="4" name="group[3659][4]" id="mce-group[3659]-3659-2 "></input><label for="mce-group[3659]-3659-2">Invertir en USA</label></li>
                            <li><input type="checkbox" value="8" name="group[3659][8]" id="mce-group[3659]-3659-3"></input><label for="mce-group[3659]-3659-3">Emprender en USA</label></li>
                        </ul>
                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                        <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                    </div>
                    <div style={{position:"absolute", left: -5000+"px"}} aria-hidden="true"><input type="text" name="b_90e3191df08962f516f427f26_5a355519bf" tabindex="-1" value="" ></input></div>
                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" ></input></div>
                </div>
            </form>
        </div>

    );
};
export default FormBody;