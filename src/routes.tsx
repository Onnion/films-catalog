import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Loader from './components/FullScreen';

const Home = React.lazy(() => import('./pages/Home'));

export default function Routes() {

    return (
        <HashRouter >
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Redirect from='*' to='/' />
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}
