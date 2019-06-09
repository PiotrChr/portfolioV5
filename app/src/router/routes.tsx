import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Pages from '@App/components/pages'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ Pages.Home } />
                <Route exact path="/blog" component={ Pages.Blog } />
                <Route component={ Pages.NotFound } />
            </Switch>
        </>
    )
}
