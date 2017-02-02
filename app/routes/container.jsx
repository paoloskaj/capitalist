import React from 'react';
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'

import Footer from '../../common/components/Footer.jsx'

const Container = (props) => <div>
<Nav />
{props.children}
<Footer />
</div>

class Nav extends React.Component {

    constructor() {
        super();
        this.state = {dropdownOpen: false};
    }

    toggleDropdown(){
    	this.setState({dropdownOpen: !this.state.dropdownOpen});
    }

  componentDidMount() {
        $('.dropdown').on('click', function(){
        	$(this).toggleClass('open');
        });

        $('.dropdown-menu').find('a').on('click', function(){
            if($('button.navbar-toggle').is(':visible')){
                $('.navbar-toggle').click();
            }
        })
    }

    render() {

    var openClass = this.state.dropdownOpen ? 'open' : '';
    var allClass = 'dropdown '+ openClass;

    	return(
    	<header>
    		<nav className="navbar navbar-default">
    			<div className="container">
    				<div className="navbar-header">
    					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    						<span className="icon-bar"></span>
    						<span className="icon-bar"></span>
    						<span className="icon-bar"></span>
    					</button>
    					<Link className="navbar-brand" to='/'>
    						<img className="img-max-width" src="/images/logo-on-black.png" alt=""/>
    					</Link>
    				</div>
    				<ul className="navbar-authorization">
    					<li>Pawel</li>
    					<li><a className="navbar-authorization-logout simple-btn mode-orange-1" href="/">Wyloguj</a></li>
    				</ul>
    				<ul className="navbar-lang">
    					<li><a href="#">EN</a></li>
    					<li><a href="#">PL</a></li>
    				</ul>
    				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    					<ul className="nav navbar-nav navbar-right">

    						<li className="dropdown" className={allClass}>
    							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Panel inwestycyjny</a>
    							<ul className="dropdown-menu">
    								<li><IndexLink to='/'>Podsumowanie</IndexLink></li>
                                    <li><IndexLink to='detail'>Szczegóły</IndexLink></li>
    								<li><Link to='/purchase'>Stan środków</Link></li>
    								<li><a href='#'>Dokumenty</a></li>
    							</ul>
    						</li>
    						<li className="dropdown" className={allClass}>
    							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Planowanie</a>
    							<ul className="dropdown-menu">
    								<li><Link to='/search'>Wyszukiwarka inwestycji</Link></li>
    								<li><a href="#">Dostosowanie inwestycji</a></li>
    								<li><a href="#">Polecane inwestycje</a></li>
    								<li><a href="#">Profesjonalny doradca</a></li>
    								<li><a href="#">Oferty publiczne</a></li>
    								<li><a href="#">Wypłata środków</a></li>
    							</ul>
    						</li>

    						<li className="dropdown" className={allClass}>
    							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Realizacja</a>
    							<ul className="dropdown-menu">
    								<li><a href="#">Zlecenia</a></li>
    								<li><Link to='/topup' activeClassName="active">Transakcje</Link></li>
    								<li><a href="#">Status realizacji</a></li>
    							</ul>
    						</li>

    						<li className="dropdown" className={allClass}>
    							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Monitoring</a>
    							<ul className="dropdown-menu">
    								<li><a href="#">Wyniki</a></li>
    								<li><a href="#">Ryzyko</a></li>
    								<li><a href="#">Raporty</a></li>
    								<li><a href="#">Alerty</a></li>
    								<li><a href="#">Analiza</a></li>
    							</ul>
    						</li>
    					</ul>
    				</div>
    			</div>
    		</nav>
    	</header>


    	)
	}
}

export default Container
