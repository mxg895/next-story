import { Route, Switch } from 'react-router';
import React from 'react';
import LazyLoader from './components/LazyLoader';

class Routes extends React.Component {
  render() {
    return <>
      <Switch>
        <Route exact key='home' path='/'
          render={(props) => <LazyLoader load={() => import('./containers/Home')} {...props} />}
        />
        <Route exact key='profile' path='/profile'
          render={(props) => <LazyLoader load={() => import('./containers/Profile')} {...props} />}
        />
        <Route exact key='forms' path='/forms'
               render={(props) => <LazyLoader load={() => import('./containers/Forms')} {...props} />}
        />
        <Route exact key='movies' path='/movies'
               render={(props) => <LazyLoader load={() => import('./containers/MediaPage')} {...props} />}
        />
        <Route exact key='books' path='/books'
               render={(props) => <LazyLoader load={() => import('./containers/MediaPage')} {...props} />}
        />
        <Route exact key='notFound' path='*'
          render={(props) => <LazyLoader load={() => import('./containers/Notfound')} {...props} />}
        />
      </Switch>
    </>;
  }
}

export default Routes;
