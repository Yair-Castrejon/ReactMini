import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './Components/App';
import Game from './Components/game/index.js';
import Options from './Components/options/index.js';

const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/game" component={Game}/>
        <Route path="/options" component={Options}/>
    </Switch>
</App>

export default AppRoutes;