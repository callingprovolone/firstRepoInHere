import React from 'react';
import { Button, Card, CardImg } from 'reactstrap';
import SecondLogo from './SecondLogo.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer id="footer" class="footer-1 colorDarkBlue colorTextOrange">
          <div class="main-footer widgets-dark typo-light">
            <div class="container">
              <div class="row">

                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="widget subscribe no-box">
                    <h5 class="widget-title">Vivir y trabajar en USA<span></span></h5>
                    <h4>Con los mejores abogados y asesores</h4>
                    <p>ayudamos a profesionales, expertos e inversionistas como tu, a emprender en USA y aplicar a visados</p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="widget no-box">
                    <h5 class="widget-title">Informacion<span></span></h5>
                    <ul class="thumbnail-widget">
                      <li>
                        <div class="thumb-content"><a href="/visas">Vivir y trabajar en USA</a></div>
                      </li>
                      <li>
                        <div class="thumb-content"><a href="/Negocios">Oportunidades de negocio</a></div>
                      </li>
                      <li>
                        <div class="thumb-content"><a href="NegociosUSA">LLeva tu negocio a USA</a></div>
                      </li>
                      <li>
                        <div class="thumb-content"><a href="Inversion">Invierte en USA</a></div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="widget no-box">
                    <h5 class="widget-title">Get Started<span></span></h5>
                    <p>Get access to your full Training and Marketing Suite.</p>
                    <a class="btn" href="#." target="_blank">Register Now</a>
                  </div>
                </div> */}

                <div class="col-xs-12 col-sm-6 col-md-3">

                  <div class="widget no-box">
                    <h5 class="widget-title">Contactanos:<span></span></h5>
                    <p>
                      <a href="https://mailchi.mp/b4469d734bb7/vivirytrabajarenusaexitoyemprendimiento">
                        <Button className="colorVividTangerine">Contactar</Button>
                      </a>
                    </p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                  <Card className="colorVividTangerine">
                    <CardImg src={SecondLogo} alt="Card image cap" />
                  </Card>
                </div>

              </div >
            </div >
          </div >

          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p>Copyright B&B Global Solutions Inc © 2019. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer >
      </div >
    );
  }
}