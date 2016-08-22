import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class Register extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
             <div className="register-component">
              <div className="container">
                <div className="row">
                  <div className="table-container">
                    <div className="table-col _top col-md-3 col-sm-4 col-xs-12 component-nav-block">
                      
                      <ul>
                        <li className="_selected"><a href="">Podstawowe dane</a></li>
                        <li><a href="">Typ inwestora</a></li>
                        <li><a href="">Formularz rejestracji</a></li>
                        <li><a href="">Quiz</a></li>
                        <li><a href="">Umowa i regulaminy</a></li>
                        <li><a href="">Zasilenie rachunku</a></li>
                      </ul>
                      
                    </div>
                    <div className="table-col _top col-md-9 col-sm-8 col-xs-12">
                      <div className="component-register-block">
                        <div className="block-header">Podstawowe dane</div>
                        <div className="text-center m-b-30">
                          <img className="img-max-width" src="/images/register-pic-1.png" alt="" />
                        </div>
                        <h1 className="block-title">Formularz rejestracyjny</h1>
                        <div className="block-row">
                          <div className="pull-left">Rozpocznij proces rejestracji</div>
                          <div className="pull-right">Jestem już zarejestrowany</div>
                        </div>
                        <div className="block-row">
                          <div className="block-row-text">Imie </div>
                          <input type="text" className="block-input"/>
                        </div>
                        <div className="block-row">
                          <div className="block-row-text">Nazwisko</div>
                          <input type="text" className="block-input"/>
                        </div>
                        <div className="block-row">
                          <div className="block-row-text">Email </div>
                          <input type="text" className="block-input"/>
                        </div>
                        <div className="block-row">
                          <div className="block-row-text">Nazwa użytkownika </div>
                          <input type="text" className="block-input"/>
                        </div>
                        <div className="block-row">
                          <div className="block-row-text">Twoje hasło</div>
                          <input type="password" className="block-input"/>
                        </div>
                        <div className="block-row">
                          <div className="block-row-text">Bezpieczne hasło powinno zawierać przynajmniej 8 znaków i małe
                          litery, wielkie litery, cyfrę i specjalny znak.</div>
                          
                        </div>
                        <div className="block-row text-right">
                          <a href="" className="block-buttonNext m-t-30 m-b-50">Dalej</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register-component">
              <div className="container">
                <div className="row">
                  <div className="table-container">
                    <div className="table-col _top col-md-3 col-sm-4 col-xs-12 component-nav-block">
                      <ul>
                        <li><a href="">Podstawowe dane</a></li>
                        <li className="_selected"><a href="">Typ inwestora</a></li>
                        <li><a href="">Formularz rejestracji</a></li>
                        <li><a href="">Quiz</a></li>
                        <li><a href="">Umowa i regulaminy</a></li>
                        <li><a href="">Zasilenie rachunku</a></li>
                      </ul>
                    </div>
                    <div className="table-col _top col-md-9 col-sm-8 col-xs-12">
                      <div className="component-register-block">
                        <div className="block-header">Typ inwestora</div>
                        <h1 className="block-title">Jakim typem inwestora jesteś</h1>
                        <div className="m-b-50">
                          <span className="block-investorType">
                            <img src="/images/register-pic-2.png" alt=""/>
                            <span className="block-investorType-text">
                              Pierwsza <br/>
                              inwestycja
                            </span>
                            <img className="block-investorType-lvlImg" src="/images/register-pic-2a.png" alt=""/>
                          </span>
                          <span className="block-investorType">
                            <img src="/images/register-pic-3.png" alt=""/>
                            <span className="block-investorType-text">
                              Początkujący <br/>
                              inwestor
                            </span>
                            <img className="block-investorType-lvlImg" src="/images/register-pic-3a.png" alt=""/>
                          </span>
                          <span className="block-investorType">
                            <img src="/images/register-pic-4.png" alt=""/>
                            <span className="block-investorType-text">
                              Świadomy <br/>
                              inwestor
                            </span>
                            <img className="block-investorType-lvlImg" src="/images/register-pic-4a.png" alt=""/>
                          </span>
                          <span className="block-investorType">
                            <img src="/images/register-pic-5.png" alt=""/>
                            <span className="block-investorType-text">
                              Doświadczony <br/>
                              inwestor
                            </span>
                            <img className="block-investorType-lvlImg" src="/images/register-pic-5a.png" alt=""/>
                          </span>
                        </div>
                        <div className="block-row text-right">
                          <a href="" className="block-buttonNext m-t-30 m-b-50">Dalej</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
              <div className="register-component">
                <div className="container">
                  <div className="row">
                    <div className="table-container">
                      <div className="table-col _top col-md-3 col-sm-4 col-xs-12 component-nav-block">
                        <ul>
                          <li><a href="">Podstawowe dane</a></li>
                          <li><a href="">Typ inwestora</a></li>
                          <li className="_selected"><a href="">Formularz rejestracji</a></li>
                          <li><a href="">Quiz</a></li>
                          <li><a href="">Umowa i regulaminy</a></li>
                          <li><a href="">Zasilenie rachunku</a></li>
                        </ul>
                      </div>
                      <div className="table-col _top col-md-9 col-sm-8 col-xs-12">
                        <div className="component-register-block">
                          <div className="block-header">Formularz rejestracji</div>
                          
                          <h1 className="block-title">Rejestracja: Osoba fizyczna</h1>
                          <div className="block-row">
                            <div className="block-row-text">
                              Po podpisaniu Umowy Ramowej otwarcie rachunków inwestycyjnych następuje elektronicznie. Przed wypełnieniem rejestracji prosimy o przeczytanie informacji: <br/>
                              <span className="c-gold">Otwarcie Rachunku Inwestycyjnego</span>
                            </div>
                          </div>
                          <div className="block-row">
                            <div className="block-row-text c-gold">
                             osoba fizyczna - pełnomocnik     osoba prawna - własciciel      osoba prawna - pełnomocnik
                            </div>
                          </div>
                          <div className="block-section">
                            <h2 className="block-title">Dane osobowe</h2>
                            <div className="block-section-content">
                              <div className="display-table _w100">
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Imię:</div>
                                  </div>
                                  <div className="display-table-cell">
                                    <input type="text" className="block-input"/>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Nazwisko:</div>
                                  </div>
                                  <div className="display-table-cell">
                                    <input type="text" className="block-input"/>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Imię ojca:</div>
                                  </div>
                                  <div className="display-table-cell">
                                    <input type="text" className="block-input"/>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Imię matki:</div>
                                  </div>
                                  <div className="display-table-cell">
                                    <input type="text" className="block-input"/>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Typ dokumentu:</div>
                                  </div>
                                  <div className="display-table-cell">
                                  <select name="" id="" className="block-select"></select>
                                </div>
                              </div>
                              <div className="display-table-row">
                                <div className="display-table-cell">
                                  <div className="block-label">Numer dokumentu:</div>
                                </div>
                                <div className="display-table-cell">
                                  <input type="text" className="block-input"/>
                                </div>
                              </div>
                              <div className="display-table-row">
                                <div className="display-table-cell">
                                  <div className="block-label">Numer PESEL:</div>
                                </div>
                                <div className="display-table-cell">
                                  <input type="text" className="block-input"/>
                                </div>
                              </div>
                            </div>
                          </div>
                             <div className="block-row">
                                <div className="block-row-text">
                               w przypadku braku PESEL należy wybrać paszport/inne i wpisać datę urodzenia (DD.MM.RRRR)
                            </div>
                                 
                                
                              </div>
                          </div>

                        <div className="block-section">
                            <div className="block-section-content">
                              <div className="display-table _w100">
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Miejsce urodzenia:</div>
                                  </div>
                                  <div className="display-table-cell">
                                   <input type="text" className="block-input"/>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Kraj urodzenia:</div>
                                  </div>
                                  <div className="display-table-cell">
                                   <select name="" id="" className="block-select"></select>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Obywatelstwo:</div>
                                  </div>
                                  <div className="display-table-cell">
                                   <select name="" id="" className="block-select"></select>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Dodatkowe obywatelstwo:</div>
                                  </div>
                                  <div className="display-table-cell">
                                   <select name="" id="" className="block-select"></select>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Status dewizowy:</div>
                                  </div>
                                  <div className="display-table-cell">
                                   <select name="" id="" className="block-select"></select>
                                  </div>
                                </div>
                                
                                 </div>
                              </div>
                            </div>

                            <div className="block-section">
                              <h2 className="block-title">Adres zameldowania</h2>
                              <div className="block-section-content">
                                <div className="display-table _w100">
                                  
                                  <div className="display-table-row">
                                    <div className="display-table-cell">
                                      <div className="block-label">Ulica:</div>
                                    </div>
                                    <div className="display-table-cell">
                                      <input type="text" className="block-input"/>
                                    </div>
                                  </div>
                                  <div className="display-table-row">
                                    <div className="display-table-cell">
                                      <div className="block-label">Nr domu:</div>
                                    </div>
                                    <div className="display-table-cell">
                                      <input type="text" className="block-input"/>
                                    </div>
                                  </div>
                                  <div className="display-table-row">
                                    <div className="display-table-cell">
                                      <div className="block-label">Nr lokalu:</div>
                                    </div>
                                    <div className="display-table-cell">
                                      <input type="text" className="block-input"/>
                                    </div>
                                  </div>
                                  <div className="display-table-row">
                                    <div className="display-table-cell">
                                      <div className="block-label">Kod pocztowy:</div>
                                    </div>
                                    <div className="display-table-cell">
                                      <input type="text" className="block-input"/>
                                    </div>
                                  </div>
                                  <div className="display-table-row">
                                    <div className="display-table-cell">
                                      <div className="block-label">Miejscowość:</div>
                                    </div>
                                    <div className="display-table-cell">
                                    <select name="" id="" className="block-select"></select>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Kraj:</div>
                                  </div>
                                  <div className="display-table-cell">
                                  <select name="" id="" className="block-select"></select>
                                </div>
                              </div>
                              <div className="display-table-row">
                                <div className="display-table-cell">
                                  <div className="block-label">Województwo:</div>
                                </div>
                                <div className="display-table-cell">
                                <select name="" id="" className="block-select"></select>
                              </div>
                            </div>
                            <div className="display-table-row">
                              <div className="display-table-cell">
                                <div className="block-label">Powiat:</div>
                              </div>
                              <div className="display-table-cell">
                              <select name="" id="" className="block-select"></select>
                            </div>
                            </div>
                            <div className="display-table-row">
                            <div className="display-table-cell">
                              <div className="block-label">Gmina:</div>
                            </div>
                            <div className="display-table-cell">
                            <select name="" id="" className="block-select"></select>
                            </div>
                            </div>


                            </div>
                            </div>
                            <div className="block-row">

                            <label className="block-checkboxLabel">
                            <input className="block-checkbox" type="checkbox"/>
                            Adres zamieszkania do celów podatkowych inny niż adres zameldowania</label>

                            </div>
                            <div className="block-row">

                            <label className="block-checkboxLabel">
                            <input className="block-checkbox" type="checkbox"/>
                            Adres do korespondencji inny niż adres zameldowania</label>

                            </div>
                            </div>


                            <div className="block-section">
                            <h2 className="block-title">Dane podatnika</h2>
                            <div className="block-section-content">
                              <div className="display-table _w100">
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">Urząd skarbowy:</div>
                                  </div>
                                  <div className="display-table-cell">
                                    <input type="text" className="block-input"/>
                                  </div>
                                </div>
                                <div className="display-table-row">
                                  <div className="display-table-cell">
                                    <div className="block-label">NIP:</div>
                                  </div>
                                  <div className="display-table-cell">
                                    <input type="text" className="block-input"/>
                                  </div>
                                </div>
                               
                            </div>
                          </div>
                             <div className="block-row">
                                <div className="block-row-text">
                              NIP wymagany dla osób prowadzących jednoosobową działalność gospodarczą
                            </div>
                                 
                                
                              </div>
                          </div>


                              <div className="block-section">
                                <h2 className="block-title">Dane podatnika</h2>
                                <div className="block-section-content">
                                  <div className="display-table _w100">
                                    <div className="display-table-row">
                                      <div className="display-table-cell">
                                        <div className="block-label">Telefon komórkowy:</div>
                                      </div>
                                      <div className="display-table-cell">
                                        <input type="text" className="block-input"/>
                                      </div>
                                    </div>
                                    
                                    <div className="display-table-row">
                                      <div className="display-table-cell">
                                        <div className="block-label">Telefon domowy:</div>
                                      </div>
                                      <div className="display-table-cell">
                                        <input type="text" className="block-input"/>
                                      </div>
                                    </div>
                                    <div className="display-table-row">
                                      <div className="display-table-cell">
                                        <div className="block-label">Podaj hasło do dyspozycji telefonicznych:</div>
                                      </div>
                                      <div className="display-table-cell">
                                        <input type="text" className="block-input"/>
                                      </div>
                                    </div>
                                    
                                  </div>
                                </div>
                                <div className="block-row">
                                  <div className="block-row-text">
                                    hasło wymagane m.in. przy odblokowaniu rachunku po utracie danych do logowania, składania zleceń drogą telefoniczną, uzyskaniu inf. dot. rachunku (do 12 znaków - duże litery i/lub cyfry)
                                  </div>
                                  
                                  
                                </div>
                              </div>

                              <div className="block-section">
                                <h2 className="block-title">Dane podatnika</h2>
                                <div className="block-section-content">
                                  <div className="display-table _w100">
                                    <div className="display-table-row">
                                      <div className="display-table-cell">
                                        <div className="block-label">E-mail:</div>
                                      </div>
                                      <div className="display-table-cell">
                                        <input type="text" className="block-input"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="block-row">
                                  <div className="block-row-text">
                                   na podany adres e-mail zostaną wysłane informacje dotyczące podpisania Umowy Ramowej
                                  </div>
                                </div>
                              </div>
                            <div className="block-row">
                            <div className="block-row-text">
                              Informujemy że zgodnie z przepisami ustawy o ochronie danych osobowych (Dz. U. z 2002 r. Nr 101, poz. 926 z późn. zm) Dom Maklerski Banku Ochrony Środowiska S.A. z siedzibą w Warszawie, ul Marszałkowska 78/80, po wypełnieniu przez Pana/Pani "formularza rejestracyjnego" staje się administratorem Pana/Pani danych osobowych. Dane osobowe przetwarzane będą w celach związanych z otwarciem rachunku maklerskiego. Jednocześnie informujemy iż przysługuje Panu/Pani prawo do wglądu, modyfikacji podanych danych. Podanie danych ma charakter dobrowolny, nie podanie przez Pana/Panią swoich danych uniemożliwi poprawne przygotowanie umowy.
                            </div>
                          </div>
                          <div className="block-row text-right">
                          <a href="" className="block-buttonNext m-t-30 m-b-50">Dalej</a>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="register-component">
                  <div className="container">
                    <div className="row">
                      <div className="table-container">
                        <div className="table-col _top col-md-3 col-sm-4 col-xs-12 component-nav-block">
                          <ul>
                            <li><a href="">Podstawowe dane</a></li>
                            <li><a href="">Typ inwestora</a></li>
                            <li><a href="">Formularz rejestracji</a></li>
                            <li className="_selected"><a href="">Quiz</a></li>
                            <li><a href="">Umowa i regulaminy</a></li>
                            <li><a href="">Zasilenie rachunku</a></li>
                          </ul>
                        </div>
                        <div className="table-col _top col-md-9 col-sm-8 col-xs-12">
                          <div className="component-register-block">
                            <div className="block-header">Quiz</div>
                            <h1 className="block-title">Formularz informacji o Kliencie</h1>
                            <div className="block-section">
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Odmawiam wypełnienia formularza
                                </label>
                              </div>
                              <div className="block-row">
                                <div className="block-row-text">
                                  Oświadczam, że firma inwestycyjna poinformowała mnie, że na skutek nie udzielenia przeze mnie odpowiedzi na poniższe pytania nie będzie w stanie dokonać stosownej oceny odpowiedniości usługi.
                                </div>
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Posiadane przez Pana/Panią wykształcenie:</h2>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Wyższe ekonomiczne na kierunkach związanych z rynkami finansowymi
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Inne wyższe
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Średnie ekonomiczne
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Inne średnie
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Podstawowe
                                </label>
                              </div>
                              
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Wykonywany obecnie przez Pana/Panią zawód: </h2>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  
                                  Pracuję w sektorze na stanowisku, które wymaga wiedzy zawodowej dotyczącej transakcji w zakresie instrumentów finansowych lub usług maklerskich
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Pracuję w przedsiębiorstwie z sektora finansowego na stanowisku, które wymaga wiedzy zawodowej wymaganej dla danego sektora np. ekonomista, prawnik lub jako zarządzający przedsiębiorstwem
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Inny
                                </label>
                              </div>
                              
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Zawód wykonywany poprzednio: </h2>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  
                                  Pracowałam/em w sektorze na stanowisku, które wymaga wiedzy zawodowej dotyczącej transakcji w zakresie instrumentów finansowych lub usług maklerskich
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Pracowałem/-łam w przedsiębiorstwie z sektora finansowego na stanowisku, które wymaga wiedzy zawodowej wymaganej dla danego sektora np prawnik, ekonomista lub jako zarządzający przedsiębiorstwem
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Inny
                                </label>
                              </div>
                              
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Jak ocenia Pan/Pani własną wiedzę w zakresie inwestowania
                              w instrumenty finansowe? </h2>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  
                                  Posiadam gruntowną i szeroką wiedzę dotyczącą inwestowania we wszystkie dostępne instrumenty finansowe
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Znam dobrze zasady inwestowania w instrumenty finansowe
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Mam niewielką wiedzę w zakresie inwestycji w instrumenty finansowe
                                </label>
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Proszę zaznaczyć instrumenty finansowe dla których znane są Pani/Panu ryzyka związane z procesem inwestycyjnym,
                              w szczególności ryzyko zmiany wartości instrumentu:</h2>
                              <div class="block-row">
                                <div class="block-row-text">
                                  (można zaznaczyć więcej niż jedną odpowiedź – do wyniku testu brana jest pod uwagę najwyżej punktowana odpowiedź)
                                </div>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Akcje
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Obligacje
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Derywaty (Instrumenty pochodne)
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Jednostki uczestnictwa  Produkty strukturyzowane i inne
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Nie znam żadnych
                                </label>
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Jak często zapoznaje się Pani/Pan z opracowaniami i analizami/rekomendacjami, dotyczącymi instrumentów finansowych?</h2>
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Często i regularnie
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Sporadycznie
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Nie sięgam do takich materiałów
                                </label>
                                
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Czy śledzi Pani/Pan notowania giełdowe, np. publikowane przez GPW? </h2>
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Często i regularnie
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Sporadycznie
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Nie
                                </label>
                                
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Czy ma Pan/Pani doświadczenie w inwestowaniu w instrumenty finansowe?</h2>
                              <div class="block-row">
                                <div class="block-row-text">
                                  (można zaznaczyć więcej niż jedną odpowiedź – do wyniku testu brana jest pod uwagę najwyżej punktowana odpowiedź)
                                </div>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Nie, nigdy nie inwestowałem/-łam samodzielnie
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Tak, mam doświadczenie w inwestowaniu w obligacje lub/i fundusze
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Tak, mam doświadczenie w inwestowaniu w akcje
                                </label>
                              </div>
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Tak, mam doświadczenie w inwestowaniu w różnego rodzaju instrumenty finansowe, w tym w instrumenty pochodne
                                </label>
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Od jak dawna Pan/Pani inwestuje w powyższe instrumenty finansowe?</h2>
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Krócej niż rok
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  1-5 lat
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Ponad 5 lat
                                </label>
                                
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Jaką kwotę zainwestował/-ła Pan/Pani w zaznaczone instrumenty we wskazanym powyżej okresie?</h2>
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Do 1 000 PLN
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  1 000 - 10 000 PLN
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  10 000 - 300 000 PLN
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Powyżej 300 000 PLN
                                </label>
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title">Jak często dokonywał/-ła Pan/Pani wskazanych powyżej transakcji w ciągu 1 roku?</h2>
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Mniej niż 5
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  6 - 30
                                </label>
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Powyżej 30
                                </label>
                                
                                
                                
                              </div>
                            </div>
                            <div className="block-section">
                              <h2 className="block-title"></h2>
                              
                              <div className="block-row">
                                <label className="block-checkboxLabel">
                                  <input type="checkbox" className="block-checkbox"/>
                                  Potwierdzam wypełnienie formularza*
                                </label>
                                
                              </div>
                            </div>
                            <div className="block-row text-right">
                              <a href="" className="block-buttonNext m-t-30 m-b-50">Dalej</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
            

        )
    }
}


