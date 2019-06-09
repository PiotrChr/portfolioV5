import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Pages from '@App/components/pages'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={ Pages.Home } />
                <Route path="/blog" component={ Pages.Blog } />
            </Switch>
        </>
    )
}
