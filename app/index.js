import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory, useRouterHistory  } from 'react-router'
import { createHashHistory, createHistory, useBasename } from 'history'

import routes from './routes.js'

require('./css/style.scss')

const history = useRouterHistory(createHistory)({ basename: '/app' })

render((
  <Router routes={routes} history={history}/>
), document.getElementById('root'));
