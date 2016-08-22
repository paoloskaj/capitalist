import React from 'react';

import { Router, Route, Link, browserHistory } from 'react-router'
var Slider = require('rc-slider');

export default class Purchase extends React.Component {


    constructor(props) {

        var state = {
            categories: [{
                name: "Akcje technologiczne",
                percentage: '17%',
                slider: 10,
                price: '20,00',
                currency: 'zł',
                value: '190,00',
                score: 15,
                stocks: [{
                    slider: 3,
                    percentage: '15,79',
                    name: 'SYGNITY',
                    price: '10,00',
                    currency: 'zł',
                    value: '30,00',
                    score: 20,
                    status: 1,
                    waiting: false
                }, {
                    slider: 5,
                    percentage: '52,63',
                    name: 'CD PROJECT',
                    price: '20,00',
                    currency: 'zł',
                    value: '100,00',
                    score: 60,
                    status: 1,
                    waiting: false
                }, {
                    slider: 2,
                    percentage: 15.79,
                    name: 'ASSECOPOL',
                    price: '30,00',
                    currency: 'zł',
                    value: '60,00',
                    score: 0,
                    status: 2,
                    waiting: false
                }]
            }, {
                name: "Akcje faramaceutyczne",
                percentage: '83%',
                slider: 8,
                price: '100,00',
                currency: 'zł',
                value: '900,00',
                score: 80,
                stocks: [{
                        slider: 2,
                        percentage: '22,22',
                        name: 'ADIUVO',
                        price: '100,00',
                        currency: 'zł',
                        value: '200,00',
                        score: 30,
                        status: 0,
                        waiting: false
                    }, {
                        slider: 2,
                        percentage: '11,11',
                        name: 'KRKA',
                        price: '50,00',
                        currency: 'zł',
                        value: '100,00',
                        score: -15,
                        status: 3,
                        waiting: true
                    }, {
                        slider: 4,
                        percentage: '66,67',
                        name: 'BIOTON',
                        price: '150,00',
                        currency: 'zł',
                        value: '600,00',
                        score: 50,
                        status: 3,
                        waiting: true
                    },

                ]
            }]
        }


        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleShareChange = this.handleShareChange.bind(this);
        this.state = state;
    }

    handleChange() {}

    handleShareChange() {

    }

    render() {
        return (
            <div>
                    <div className="container m-t-20 m-b-20" style={{"padding" : "15px"}}>
                        <div className="row">
                            <div className="col-padding col-md-6">
                                <div className="wybranyMotyw-component">
                                    <div className="component-header">wybrany motyw</div>
                                    <div className="component-leftCol col-md-5 col-no-padding">
                                        <div className="component-leftCol-img">
                                            <img className="img-max-width" alt="900x500" src="/images/carousel.jpg"/>
                                            <div className="component-leftCol-img-overlay">nazwa</div>
                                        </div>
                                        <div className="display-table _w100">
                                            <div className="component-leftCol-tag display-table-cell">
                                                <div className="component-leftCol-tag-title1">poziom ryzyka</div>
                                                <img src="/images/pic-2.png" alt=""/>
                                                <div className="component-leftCol-tag-title2">SREDNI</div>
                                            </div>
                                            <div className="component-leftCol-tag display-table-cell">
                                                <div className="component-leftCol-tag-title1">ZWROT</div>
                                                <img src="/images/pic-3.png" alt=""/> 
                                                <div className="component-leftCol-tag-title2">maly</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="component-rightCol col-md-7 col-no-padding">
                                        <p className="text-uppercase s18 w600">
                                            <span className="">Urządzenia przenośne </span>
                                            <span className="">+ 8.94%</span>
                                        </p>
                                        <p className="text">Zainwestuj w urządzenia przenośne którę po mocnej ekspansji z rynków zachodnich zaczynają ekspancje na rynki wschodnie. Mimo dość nowego kapitału w ciągu roku analitycy szacują zwiększenie akcji o 12%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-padding col-md-6">
                                <div className="sumPurchase-component">
                                    <div className="component-header">podsumowanie zakupu</div>
                                    <div class="component-content">
                                        <p className="text">Wszystkie ceny są estymowane . Po zleceniu zakupu nastąpi próba kupna niżej wymienionych akcji</p>
                                    </div>
                                    <div className="component-table">
                                        <table>
                                            <tr>
                                                <td>CENA</td>
                                                <td>00.00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>ILOŚĆ</td>
                                                <td><input type="text" placeholder="0"/></td>
                                            </tr>
                                            <tr>
                                                <td>PROWIZJA</td>
                                                <td>00.00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>RAZEM</td>
                                                <td>00.00 PLN</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <a href="" className="simple-btn mode-gray-1 m-l-5 m-t-15">Anuluj</a>
                                    <a href="" className="simple-btn mode-orange-1 m-l-5 m-t-15">zleć kupno</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container m-b-20" style={{"padding" : "15px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="purchaseTable-component">
                                    <div className="component-table">
                                        <table>
                                            <thead>
                                                <tr className="row-head1">
                                                    <th>UDZIAŁ</th>
                                                    <th></th>
                                                    <th>Segment i akcje</th>
                                                    <th>cena</th>
                                                    <th>wartość</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                        </table>

                                        {
                                this.state.categories.map(function(category, i){

                                    var self = this;
            
                                    var stocks = category.stocks.map(function(stock, i){
      

                                         var scoreClass = "column-change mode-neutral";

                                         if(stock.score > 0){
                                           scoreClass = "column-change mode-positive";
                                         }else if(stock.score < 0){
                                           scoreClass = "column-change mode-negative";
                                         }

                                         var status = null;

                                        if(stock.waiting ){
                                            status = (
 <td className="column-status2">
                                                        <span className="column-status2-ico"></span>
                                                        <span class="columng-status2-bar">
                                                            <img class="img-max-width" src="/images/status-bar.png" alt=""/>
                                                        </span>
                                                        <span className="column-status2-title">CZEKAJ</span>
                                                    </td>
                                                )
                                        }else{

                                            status  = (
                                            <td className="column-status1 mode-negative">
                                                            <span className="column-status1-ico"></span>
                                                            <span className="column-status1-title">Nie udało się zakupić akcji</span>
                                                        </td>
                                            )

                                            if(stock.status == 1){
                                                 status = (
                                                    <td className="column-status1 mode-positive">
                                                        <span className="column-status1-ico"></span>
                                                        <span className="column-status1-title">Kupno zakończyło się sukcesem</span>
                                                    </td>

                                            
                                            )
                                            }else if(stock.status == 2){
                                             
                                              status = (
                                                  <td className="column-status1 mode-neutral">
                                                       <span className="column-status1-ico"></span>
                                                        <span className="column-status1-title">Nastapiła zmiana ceny</span>
                                                     </td>
                                            )   
                                            }

                                           
                                        }

                                        return (
                                        <tr>
                                                                                            
                                                    <td>
                                                        <span className="component-table-partCont">
                                                            <input type="text" onChange={self.handleChange} defaultValue={stock.percentage}/>
                                                        </span>
                                                    </td>
                                                    
                                                    
                                                    <td className="column-slider"><Slider step={0.01} defaultValue={stock.slider} tipTransitionName="rc-slider-tooltip-zoom-down" onChange={self.handleShareChange} /></td>
                                                    <td>{stock.name}</td>
                                                    <td className={scoreClass}>
                                                        <span>{stock.price}</span>
                                                        <span className="column-change-title vcenter s9">20</span>
                                                    </td>
                                                    <td>{stock.value}</td>
                                                    {status}            
                                                </tr>
                                        )
                                    })

                                            return (
                                            <table>
                                            <thead> 
                                                <tr className="row-head2">
                                                    <th className="column-part">
                                                        <span className="column-part-ico"></span>
                                                    </th>
                                                    <th>{category.percentage}</th>
                                                    <th>{category.name}</th>
                                                    <th>{category.price}</th>
                                                    <th>{category.value}</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>     
                                                {stocks}                                                                            </tbody>
                                            </table>
                                        )
                                    
                                    
                                }, this)
                            }

                                    </div>
                                    <div className="component-summary">
                                        <table>
                                            <tr>
                                                <td>RAZEM</td>
                                                <td>360.00</td>
                                                <td>1090.00</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
