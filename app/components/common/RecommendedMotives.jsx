import React from 'react';
import { Carousel } from 'react-bootstrap';


const carouselInstance = (
    <div className="polecany-motywy-component">
      <div className="component-header">Polecane motywy</div>
      <div className="component-content">
        <Carousel>
        <Carousel.Item>
        <div className="row">
          <div className="col-padding col-lg-2 col-md-3">
            <img className="img-max-width" alt="900x500" src="/images/carousel.jpg"/>
          </div>
          <div className="col-padding col-lg-10 col-md-9">
            <p className="s18 text-uppercase m-b-10">Technologie</p>
            <p className="s14">Zainwestuj w Ĺ›wiat techniki ktĂłra z dnia na dzieĹ„ zmienia siÄ™ i roĹ›nie w takim tempnie ĹĽe dziĹ› nikt nie potrafi za niÄ… nadÄ…ĹĽyÄ‡.</p>
            <div className="text-right">
              <button className="simple-btn mode-orange-1 m-l-5 m-r-5">WIÄ�CEJ</button>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="row">
          <div className="col-padding col-lg-2 col-md-3">
            <img className="img-max-width" alt="900x500" src="/images/carousel.jpg"/>
          </div>
          <div className="col-padding col-lg-10 col-md-9">
            <p className="s18 text-uppercase m-b-10">Twoj motyw</p>
            <p className="s14">Zainwestuj w Ĺ›wiat techniki ktĂłra z dnia na dzieĹ„ zmienia siÄ™ i roĹ›nie w takim tempnie ĹĽe dziĹ› nikt nie potrafi za niÄ… nadÄ…ĹĽyÄ‡.</p>
            <div className="text-right">
              <button className="simple-btn mode-orange-1 m-l-5 m-r-5">WIÄ�CEJ</button>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="row">
          <div className="col-padding col-lg-2 col-md-3">
            <img className="img-max-width" alt="900x500" src="/images/carousel.jpg"/>
          </div>
          <div className="col-padding col-lg-10 col-md-9">
            <p className="s18 text-uppercase m-b-10">Cos tam</p>
            <p className="s14">Zainwestuj w Ĺ›wiat techniki ktĂłra z dnia na dzieĹ„ zmienia siÄ™ i roĹ›nie w takim tempnie ĹĽe dziĹ› nikt nie potrafi za niÄ… nadÄ…ĹĽyÄ‡.</p>
            <div className="text-right">
              <button className="simple-btn mode-orange-1 m-l-5 m-r-5">WIÄ�CEJ</button>
            </div>
          </div>
        </div>
        </Carousel.Item>
        </Carousel>
      </div>
    </div>
);

export default class RecommendedMotives extends React.Component {

    constructor() {
        super();
        this.state = {
          'activeMotiveId' : 0
        };
    }

    render() {
      var recommendedMotives = this.props.recommendedMotives;

      return (
        <div>
            {carouselInstance}
        </div>
        )
    }
}
