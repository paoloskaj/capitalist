import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './routes/home.jsx';
import Dashboard from './routes/dashboard.jsx';
import Container from './routes/container.jsx'
import Search from './routes/search.jsx'
import Detail from './routes/detail.jsx'
import Purchase from './routes/purchase.jsx'
import Topup from './routes/topup.jsx'
import Register from './routes/register.jsx'

module.exports = (
    <Route name="home" path="/" component={Container}>
	    <IndexRoute component={Dashboard}/>
	    <Route name="dashboard" path="dashboard" component={Dashboard} />
	    <Route name="search" path='search' component={Search} />
	   	<Route name="purchase" path='purchase' component={Purchase} />
	    <Route name="detail" path='detail' component={Detail} />
	    <Route name="topup" path='topup' component={Topup} />
	    <Route name="register" path='register' component={Register} />
    </Route>
)