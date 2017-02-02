import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'


import RecommendedMotives from '../components/common/RecommendedMotives.jsx'
//Motifs=require('../models/Motifs');

//var assert=require('assert');
//var db = mongoskin.db('mongodb://@localhost:27017/nodetest2', {safe:true});
//var cursor= db.collection('motiflist').find();
//console.log(cursor);

require('rc-slider/assets/index.css');
var Slider = require('rc-slider');
var SliderDefaultValue=10;
var min=0;
var max=100;







export default class Search extends React.Component {

    constructor() {
        super();
        this.state = data;
    }


    render() {
        return (

        <div>
          <div className="container m-t-20 m-b-20" style={{"padding" : "15px"}}>
            <div className="row">
              <div className="col-md-3">
                <div className="search-component">
                  <div className="component-header">&nbsp;</div>
                  <div className="component-body">
                    <div className="search-menu-block">
                      <div className="block-header">
                        <span className="block-header-title">
                          zysk/strata
                        </span>
                        <span className="block-header-button">
                          <button>[+]</button>
                        </span>
                      </div>
                      <div className="block-content">
                      <div className="block-content-slider">
                         <Slider defaultValue={SliderDefaultValue} min={min} max={max} tipTransitionName="rc-slider-tooltip-zoom-down" onChange={this.handleShareChange} />
                      </div>

                      </div>
                    </div>
                    <div className="search-menu-block">
                      <div className="block-header">
                        <span className="block-header-title">
                          Ogólne
                        </span>
                        <span className="block-header-button">
                          <button>[+]</button>
                        </span>
                      </div>
                      <div className="block-content">
                        <ul className="block-content-list">
                          <li>
                            <input type="checkbox"/>
                            <label for="">Nowe</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Popularne</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Ostatnio kupione</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="search-menu-block">
                      <div className="block-header">
                        <span className="block-header-title">
                          Sektory
                        </span>
                        <span className="block-header-button">
                          <button>[+]</button>
                        </span>
                      </div>
                      <div className="block-content">
                        <ul className="block-content-list">
                          <li>
                            <input type="checkbox"/>
                            <label for="">Energetyczny</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Żródłą odnawialne</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Wydatki detaliczne</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Technogolia</label>
                          </li>
                           <li>
                            <input type="checkbox"/>
                            <label for="">Podróże</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="search-menu-block">
                      <div className="block-header">
                        <span className="block-header-title">
                          Globalne
                        </span>
                        <span className="block-header-button">
                          <button>[+]</button>
                        </span>
                      </div>
                      <div className="block-content">
                        <ul className="block-content-list">
                          <li>
                            <input type="checkbox"/>
                            <label for="">Rynki wshodzące</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Rynki rozwinięte</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="search-menu-block">
                      <div className="block-header">
                        <span className="block-header-title">
                          Ryzyko
                        </span>
                        <span className="block-header-button">
                          <button>[+]</button>
                        </span>
                      </div>
                      <div className="block-content">
                        <ul className="block-content-list">
                          <li>
                            <input type="checkbox"/>
                            <label for="">Duże</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Umiarkowane</label>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <label for="">Marginalne</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="search-component">
                  <div className="component-header">Wyszukiwarka</div>
                  <div className="component-body">
                    <div className="search-form-block">
                      <input type="text" placeholder="WYSZUKAJ"/>
                    </div>
                    <div className="search-nav-block">
                      <div className="display-table _w100">
                        <div className="display-table-cell">
                          <div className="block-tab">
                            <a href="" className="block-tab-title _active">motywy</a>
                            <a href="" className="block-tab-title">akcje</a>
                            <a href="" className="block-tab-title">indeksy</a>
                            <a href="" className="block-tab-title">ipo</a>
                          </div>
                        </div>
                        <div className="display-table-cell">
                         <div className="block-sort">
                           <label for="">sortuj</label>
                           <input type="text"/>
                           <button className="block-sort-filter-1"></button>
                           <button className="block-sort-filter-2"></button>
                         </div>
                       </div>
                       <div className="display-table-cell">
                        <div className="block-pagination">
                          <button className="block-pagination-arrow">&lt;</button>
                          <button className="_active">1</button>
                          <button>2</button>
                          <button>3</button>
                          <button>4</button>
                          <button>5</button>
                          <button className="block-pagination-arrow">&gt;</button>
                        </div>
                      </div>
                    </div>
                  </div>

              {
                this.state.motives.map(function(motive, i){

                var levelVerbal = {1 : 'BARDZO NISKI', 2 : 'NISKI', 3 : 'ŚREDNI', 4 : 'DUŻY', 5 : 'BARDZO DUŻY'};

                var riskLevelClass =  'risk-' + motive.risk;
                var returnLevelClass = 'return-' + motive.return;

                  return (
                     <div className="col-padding col-md-4 col-sm-4">
                    <div className="search-news-block">
                      <div className="block-image">
                          <Link to="detail">
                          <img width="252" height="157" src={motive.img} alt=""/>
                          </Link>
                        <div className="block-image-overlay">
                          <div className="display-table _w100">
                              <Link to="detail" className="block-image-overlay-title display-table-cell text-left">{motive.name}</Link>


                            <div className="block-image-overlay-price _positive display-table-cell text-right">{motive.percentage}</div>
                          </div>
                        </div>
                      </div>
                      <div className="block-content">
                        <div className="display-table _w100">
                          <div className="display-table-cell _top text-center">
                            <p className="block-content-title-1">poziom ryzyka</p>
                            <div className="block-content-pictogram">
                               <img src={'/images/' + riskLevelClass + '.png'} alt=""/>
                            </div>
                            <p className="block-content-title-2">{levelVerbal[motive.risk]}</p>
                          </div>
                          <div className="display-table-cell _top text-center">
                            <p className="block-content-title-1">zwrot</p>
                            <div className="block-content-pictogram">
                                <img src={'/images/' + returnLevelClass + '.png'} alt=""/>
                            </div>
                             <p className="block-content-title-2">{levelVerbal[motive.return]}</p>
                          </div>
                          <div className="display-table-cell _top text-right">
                            <p className="block-content-title-1">WARTOŚĆ MOTYWU</p>
                            <p className="block-content-title-price">{motive.value} {motive.currency}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              }



                </div>

                <div className="component-footer">
                <div className="search-pagination-block">
                      <div className="text-right">
                        <div className="block-pagination">
                          <button className="block-pagination-arrow">&lt;</button>
                          <button className="_active">1</button>
                          <button>2</button>
                          <button>3</button>
                          <button>4</button>
                          <button>5</button>
                          <button className="block-pagination-arrow">&gt;</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Link to="topup" className="simple-btn mode-orange-1 m-t-15 m-b-10">DOŁADUJ KONTO</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-b-20" style={{"padding" : "15px"}}>
          <div className="row">
            <div className="col-md-12">
                  <RecommendedMotives recommendedMotives={data.recommendedMotives} />
            </div>
          </div>
        </div>
      </div>
        )
    }
}




/*
 mongoose.connect(config.database);
 mongoose.connection.on('error', function() {
 console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
 });
 */




var recommendedMotives = [
    { 'id': 0, 'name': 'Kamienie Szlachetne', 'img': '/wwww/www/', 'change': '00.00', 'description': 'Lorem Ipsum' },
    { 'id': 1, 'name': 'Gry Online', 'img': '/wwww/www/', 'change': '00.00', 'description': 'Lorem Ipsum' },
]



var motives = [

    { 'id': 0,
      'name': 'Technologie',
       'img': '/images/sample/technology.png',
        'value': '230',
        'currency' : 'PLN',
         'percentage': '+8,94%',
         'risk': 3 ,
         'return': 1 },
    { 'id': 1,
      'name': 'Recykling',
       'img': '/images/sample/recycling.png',
        'value': '34',
                'currency' : 'PLN',
         'percentage': '+2,94%',
         'risk': 4 ,
         'return': 4 },
    { 'id': 2,
      'name': 'Narzędzia medyczne',
       'img': '/images/sample/medical.png',
        'value': '320',
                'currency' : 'PLN',
         'percentage': '+7,54%',
         'risk': 2 ,
         'return': 1 },

    { 'id': 3,
      'name': 'Badania medyczne',
       'img': '/images/sample/research.png',
        'value': '543',
                'currency' : 'PLN',
         'percentage': '+0,34%',
         'risk': 2 ,
         'return': 4 },

    { 'id': 4,
      'name': 'Kasyna',
       'img': '/images/sample/casino.png',
        'value': '30',
                'currency' : 'PLN',
         'percentage': '+1,44%',
         'risk': 2 ,
         'return': 4 },

    { 'id': 5,
      'name': 'Zdrowa żywność',
       'img': '/images/sample/food.png',
        'value': '94',
                'currency' : 'PLN',
         'percentage': '+22,01%',
         'risk': 2 ,
         'return': 2 },



]


var data = {'motives' : motives,
            'recommendedMotives':recommendedMotives};
