import { Route, Switch } from 'react-router';
import React from 'react';
import LazyLoader from './components/LazyLoader';

class Routes extends React.Component {
  render() {
    return <>
      <Switch>
        <Route exact key='home' path='/'
          render={(props) => <LazyLoader load={() => import('./containers/Home')} {...props}></LazyLoader>}
        />
        <Route exact key='profile' path='/profile'
          render={(props) => <LazyLoader load={() => import('./containers/Profile')} {...props}></LazyLoader>}
        />
        <Route exact key='forms' path='/forms'
               render={(props) => <LazyLoader load={() => import('./containers/Forms')} {...props}></LazyLoader>}
        />
        <Route exact key='notFound' path='*'
          render={(props) => <LazyLoader load={() => import('./containers/Notfound')} {...props}></LazyLoader>}
        />
      </Switch>
    </>;
  }
}

export default Routes;
