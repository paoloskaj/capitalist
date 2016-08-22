import React from 'react';
import Chart from 'chartjs'
import { Router, Route, Link, browserHistory } from 'react-router'

var LineChart = require("react-chartjs").Line;
var Slider = require('rc-slider');

import RecommendedMotives from '../components/common/RecommendedMotives.jsx'

class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

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
        </div>
          )
       }
 }

var graph = [
    { 'id': 0, 'x': 10, 'y': 15 },
    { 'id': 1, 'x': 10, 'y': 15 },
    { 'id': 2, 'x': 10, 'y': 15 },
    { 'id': 3, 'x': 10, 'y': 15 },
]

var data = {
    graph: graph
}

export default class Detail extends React.Component {

    constructor(props) {

    	var state = {
    				categories : [
    					{
    						name : "Akcje technologiczne",
    						percentage : '17%',
    						slider : 10,
    						price : '20,00',
    						currency : 'zł',
    						value : '190,00',
    						score : 15,
    						stocks : [
		    					{
		    						slider : 3,
		    						percentage : '15,79',
		    						name : 'SYGNITY',
		    						price : '10,00',
		    						currency : 'zł',
		    						value : '30,00',
		    						score : 20
		    					},
		    					{
		    						slider : 5,
		    						percentage : '52,63',
		    						name : 'CD PROJECT',
		    						price : '20,00',
		    						currency : 'zł',
		    						value : '100,00',
		    						score : 60
		    					},
		    					{
		    						slider : 2,
		    						percentage : 15.79,
		    						name : 'ASSECOPOL',
		    						price : '30,00',
		    						currency : 'zł',
		    						value : '60,00',
		    						score : 0
		    					}
		    				]
    					},
    					    					{
    						name : "Akcje faramaceutyczne",
    						percentage : '83%',
    						slider : 8,
    						price : '100,00',
    						currency : 'zł',
    						value : '900,00',
    						score : 80,
    						stocks : [
		    					{
		    						slider : 2,
		    						percentage : '22,22',
		    						name : 'ADIUVO',
		    						price : '100,00',
		    						currency : 'zł',
		    						value : '200,00',
		    						score : 30
		    					},
		    					{
		    						slider : 2,
		    						percentage : '11,11',
		    						name : 'KRKA',
		    						price : '50,00',
		    						currency : 'zł',
		    						value : '100,00',
		    						score : -15
		    					},
		    					{
		    						slider : 4,
		    						percentage : '66,67',
		    						name : 'BIOTON',
		    						price : '150,00',
		    						currency : 'zł',
		    						value : '600,00',
		    						score : 50
		    					},

		    				]
    					}
    				]
    	}


        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = state;
    }

    handleChange(){
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
										<span className=""> 8.94%</span>
									</p>
									<p className="text">Zainwestuj w urządzenia przenośne którę po mocnej ekspansji z rynków zachodnich zaczynają ekspancje na rynki wschodnie. Mimo dość nowego kapitału w ciągu roku analitycy szacują zwiększenie akcji o 12%</p>
									<div className="text-right">
										<a href="" className="simple-btn mode-gray-1 m-l-5 m-t-25">konfiguruj</a>
										<Link to="purchase" className="simple-btn mode-orange-1 m-l-5 m-t-25">kup motyw</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-padding col-md-6">
							<Graph graph={data.graph} />
							</div>
						</div>
					</div>
					<div className="container m-b-20" style={{"padding" : "15px"}}>
						<div className="row">
							<div className="col-md-12">
								<div className="detailTable-component">
									<div className="component-table">
										<table>
											<thead>
												<tr className="row-head1">
													<th>UDZIAŁ</th>
													<th></th>
													<th></th>
													<th>cena</th>
													<th>wartość</th>
													<th>WYNIK</th>
												</tr>
													<tr className="row-head2">
													<th className="column-part">
														<span className="column-part-ico"></span>
													</th>
													<th>100 %</th>
													<th>RAZEM</th>
													<th>00.00</th>
													<th>00.00</th>
													<th className="column-change mode-positive">
														<span className="column-change-title vcenter s9">+45</span>
													</th>
												</tr>
												</thead>
												</table>

							{
								this.state.categories.map(function(category, i){


									     var scoreClass = "column-change mode-neutral";

									     if(category.score > 0){
									       scoreClass = "column-change mode-positive";
									     }else if(category.score < 0){
									       scoreClass = "column-change mode-negative";
									     }

			
									var stocks = category.stocks.map(function(stock, i){

									     var scoreClass = "column-change mode-neutral";

									     if(stock.score > 0){
									       scoreClass = "column-change mode-positive";
									     }else if(stock.score < 0){
									       scoreClass = "column-change mode-negative";
									     }

										return (
										<tr>
																							
													<td>
														<span className="component-table-partCont">
															<input onChange={self.handleChange} type="text" defaultValue={stock.percentage}/>
														</span>
													</td>
													<td className="column-slider">
											<Slider step={0.01} defaultValue={stock.slider} tipTransitionName="rc-slider-tooltip-zoom-down" /></td>
													<td>{stock.name}</td>
													<td className={scoreClass}>
														<span className="column-change-price">{stock.price} {stock.currency}</span>
														<span className="column-change-title vcenter s9">{stock.score}</span>
													</td>
													<td>{stock.value} {stock.currency}</td>
													<td className={scoreClass}>
														<span className="column-change-title vcenter s9">{stock.score}</span>
													</td>
												</tr>
										)
									})

											return (
											<table>
												<thead>
											
												<tr className="row-head3">
													<th className="column-part">
														<span className="column-part-ico"></span>
													</th>
													<th>{category.percentage}</th>
													<th>{category.name}</th>
													<th>{category.price}{category.currency}</th>
													<th>{category.value} {category.currency}</th>
													<th className={scoreClass}>
														<span className="column-change-title vcenter s9">{category.score}</span>
													</th>
												</tr>
											</thead>
											<tbody>		
												{stocks}																			</tbody>
											</table>
										)
									
									
								}, this)
							}
											
									</div>
								</div>
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
