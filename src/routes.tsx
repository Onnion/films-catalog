import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Loader from './components/FullScreen';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));

export default function Routes() {
    return (
        <HashRouter >
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    <Route name="home" path='/' exact={true} component={Home} />
                    <Route name="detail" path='/detail/:movie_id' component={Detail} />
                    <Redirect from='*' to='/' />
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}
