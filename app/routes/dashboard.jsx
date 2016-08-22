import React from 'react';
import Chart from 'chartjs'

require('rc-slider/assets/index.css');

var ReactDOM = require('react-dom');
var Slider = require('rc-slider');
import { Router, Route, Link, browserHistory } from 'react-router'
import RecommendedMotives from '../components/common/RecommendedMotives.jsx'
var LineChart = require("react-chartjs").Line;
var PieChart = require("react-chartjs").Pie;

require('bootstrap')

export default class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = data;
    }

    render() {
        return (
        <div>
          <div className="container m-t-20 m-b-20" style={{"padding" : "15px"}}>
           <div className="row">
            <div className="col-padding col-md-6">
              <Wallet wallet={data.wallet}/>
            </div>
            <div className="col-padding col-md-6">
              <Graph graph={data.graph} />
            </div>
          </div>
        </div>
        <div className="container m-b-20" style={{"padding" : "15px"}}>
          <div className="row">
            <div className="col-md-12">
              <Motives motives={data.motives} />
            </div>
          </div>
        </div>
        <div className="container m-b-20" style={{"padding" : "15px"}}>
          <div className="row">
            <div className="col-md-12">
              <RecommendedMotives />
            </div>
          </div>
        </div>
      </div>
        )
    }

}


class Wallet extends React.Component {

    componentDidMount() {
      window.dispatchEvent(new Event('resize'));
    }

    render() {

        var doughnutOptions = {

            percentageInnerCutout: 60,
            animation: false,
            animationSteps: 50,
            animateRotate: true,
            responsive: true,

        }


        var doughnutData = [ {
                value: this.props.wallet.provision,
                color: "#fcd95d",
                label: 'Prowizje'

            }, {
                value: this.props.wallet.gain,
                color: "#e87936",
                label: 'Zyski'

            }, {
                value: this.props.wallet.cash,
                color: "#f0a22c",
                label: 'Gotówka'

            },

        ]

        

        return (
        <div>
          <div className="wallet-component">
            <table className="">
             <thead>
              <tr>
                <th>Portfel</th>
                <th>00.00</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inwestycje</td>
                <td>{this.props.wallet.investment}</td>
                <td rowSpan="4">
                  <PieChart data={doughnutData} options={doughnutOptions}  />
                </td>
                 <td rowSpan="4">
                  <div><span style={{"background" : "#e87936"}}></span><label>Wartość inwestycji</label></div>
                  <div><span style={{"background" : "#fcd95d"}}></span><label>Gotówka</label></div>
                </td>
              </tr>
              <tr>
                <td>Prowizje</td>
                <td>{this.props.wallet.provision}</td>
              </tr>
              <tr>
                <td>Zysk/Strata</td>
                <td>{this.props.wallet.gain}</td>
              </tr>
              <tr>
                <td>Gotówka</td>
                <td>{this.props.wallet.cash}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-right">
        <Link to="topup" className="simple-btn mode-orange-1 m-t-15">DOŁADUJ KONTO</Link>
        </div>
      </div>
        )

    }
}


class Graph extends React.Component {

    componentDidMount() {
      window.dispatchEvent(new Event('resize'));
    }

     render() {

      var lineOptions = {
          fill : false,
          responsive : true,
          bezierCurve: false,
          animation: false,
          maintainAspectRatio: false
      }

      var lineData = {
        labels : ["00.00","00.00","00.00","00.00","00.00","00.00","00.00"],
        datasets : [
          {
            fillColor : "rgba(0,0,0,0.0)", // hack for no fill
            borderJoinStyle: 'miter',
            strokeColor : "red",
            data : [456,479,324,569,702,600, 700],
          }
        ]
      }

        return(
        <div>
          <div className="graph-component">
            <div className="component-header display-table _w100">
              <div className="display-table-cell text-left">zysk / strata</div>
              <div className="display-table-cell text-right s9">miesiąc rok</div>
            </div>
            <div className="component-body" style={{"height" : "165px"}}>
             <LineChart data={lineData} options={lineOptions} />
           </div>
           <div className="component-group">
              <a href="" className="component-group-button _selected">dzień</a>
              <a href="" className="component-group-button">MIESIĄC</a>
              <a href="" className="component-group-button">3 MIESIĄCE</a>
              <a href="" className="component-group-button">6 MIESIĘCY</a>
              <a href="" className="component-group-button">ROK</a>
            </div>
           </div>
           <div className="text-right">
        <a href="" className="simple-btn mode-orange-1 m-t-15">SZCZEGÓŁY</a>
        </div>
    
       </div>
          )
       }
 }

 class Motives extends React.Component{
   render (){

     var self = this;
     var motives = this.props.motives.map(function (motive) {
                   return <Motive handleShareChange={self.props.handleShareChange} key={motive.id} motive={motive}/>
                   })

     return (
     <div className="motywy-component">
      <table className="">
       <thead>
        <tr>
          <th>Twoje motytywy</th>
          <th>Wartość</th>
          <th>Zmiana</th>
          <th>Udział</th>
          <th>Operacja</th>
        </tr>
      </thead>
      <tbody>
       {motives}
     </tbody>
   </table>


 </div>
        )
   }
 }

 class Motive extends React.Component{

  handleShareChange(){
      }

   render(){

     var motive = this.props.motive;
     var changeClass = "mode-neutral column-change";

     if(motive.change > 0){
       changeClass = "mode-positive column-change";
     }else if(motive.change < 0){
       changeClass = "mode-negative column-change";
     }

     return (<tr>
     <td>
     <Link to="detail">
      <img src={motive.img} alt={motive.name} width="70" height="70" style={{marginRight : 10 +'px'}}/>
     </Link>
     <Link to="detail" className="component-title-motyw">{motive.name}</Link>
     </td>
     <td>{motive.value}</td>
     <td className={changeClass}>
       <span className="vcenter m-r-5">{motive.change}</span>
       <span className="column-change-title vcenter">{motive.change}</span>
     </td>
     <td className="column-share">
            <Slider tipTransitionName="rc-slider-tooltip-zoom-down" onChange={this.handleShareChange} />
     </td>
     {/*<td>{motive.share}</td>*/}
     <td>
       <button className="simple-btn mode-orange-1 m-l-5 m-r-5 m-t-5 m-b-5">Kup</button>
       <button className="simple-btn mode-black-1 m-l-5 m-r-5 m-t-5 m-b-5">Sprzedaj</button>
     </td>
   </tr>
      )
   }
 }



var wallet = {
    'investment': 120,
    'provision': 100,
    'gain': 300,
    'cash': 66
}

var motives = [
    { 'id': 0, 'name': 'Kamienie Szlachetne', 'img': '/images/sample/stones.jpg', 'value': '00.00', 'change': 0, 'share': 33.33 },
    { 'id': 1, 'name': 'Gry Online', 'img': '/images/sample/games.jpg', 'value': '00.00', 'change': -20, 'share': 22.30 },
    { 'id': 2, 'name': 'Video Online', 'img': '/images/sample/videos.jpg', 'value': '00.00', 'change': 27, 'share': 12.30 },
]

var recommendedMotives = [
    { 'id': 0, 'name': 'Kamienie Szlachetne', 'img': '/images/sample/stones.jpg', 'change': '00.00', 'description': 'Lorem Ipsum' },
    { 'id': 1, 'name': 'Gry Online', 'img': '/images/sample/games.jpg', 'change': '00.00', 'description': 'Lorem Ipsum' },
]

var graph = [
    { 'id': 0, 'x': 10, 'y': 15 },
    { 'id': 1, 'x': 10, 'y': 15 },
    { 'id': 2, 'x': 10, 'y': 15 },
    { 'id': 3, 'x': 10, 'y': 15 },
]

var data = {
    wallet: wallet,
    motives: motives,
    graph: graph,
    recommendedMotives: recommendedMotives
}
