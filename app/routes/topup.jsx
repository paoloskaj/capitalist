import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class Topup extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
<div>
  <div className="topup-component">
    <div className="container m-t-20 m-b-20" style={{"padding" : "15px"}}>
      <div className="row">
        <div className="component-form1-block">
          <div className="block-row">
            <div className="container" >
              <div className="row">
                <div className="col-md-4">
                  <div className="block-row-title">Kwota zasilenia</div>
                </div>
                <div className="col-md-8">
                  <input type="text" placeholder="00.00" className="block-row-input"/>
                </div>
              </div>
            </div>
          </div>
          <div className="block-row">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="block-row-title">Sposób płatności</div>
                </div>
                <div className="col-md-8">
                  <label className="block-row-label" for="">
                    <input type="radio" name="payment"/>
                    <img src="/images/topup/1.png" alt=""/>
                  </label>
                  <label className="block-row-label" for="">
                    <input type="radio" name="payment"/>
                    <img src="/images/topup/2.png" alt=""/>
                  </label>
                  <label className="block-row-label" for="">
                    <input type="radio" name="payment"/>
                    <img src="/images/topup/3.png" alt=""/>
                  </label>
                </div>
            </div>
              </div>
          </div>
          <div className="block-row">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-8">
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-1.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-2.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-3.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-4.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-5.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-6.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-7.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-8.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-9.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-10.png" alt=""/>
                  </span>

                  <span className="block-row-payment">
                    <img src="/images/topup/layer-11.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-12.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-13.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-14.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-15.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-16.png" alt=""/>
                  </span>

                  <span className="block-row-payment">
                    <img src="/images/topup/layer-17.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-18.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-19.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-20.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-21.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-22.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-23.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-24.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-25.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-26.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-27.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-28.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-29.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-30.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-31.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-32.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-33.png" alt=""/>
                  </span>

                  <span className="block-row-payment">
                    <img src="/images/topup/layer-34.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-35.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-36.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-37.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-38.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-39.png" alt=""/>
                  </span>
                  <span className="block-row-payment">
                    <img src="/images/topup/layer-40.png" alt=""/>
                  </span>

                  <span className="block-row-payment">
                    <img src="/images/topup/layer-41.png" alt=""/>
                  </span>
                 

                    
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="text-right">
          <a href="" className="simple-btn mode-black-1 m-t-15">DOŁADUJ</a> 
        </div>
      </div>
    </div>
    
  </div>
</div>
        )
    }
}


