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
        <Route exact key='login' path='/login'
               render={(props) => <LazyLoader load={() => import('./containers/Login')} {...props} />}
        />
        <Route exact key='signup' path='/signup'
               render={(props) => <LazyLoader load={() => import('./containers/SignUp')} {...props} />}
        />
        <Route exact key='mediaPage' path='/:mediaType/:id'
               render={(props) => <LazyLoader load={() => import('./containers/MediaPage')} {...props} />}
        />
        <Route exact key='nextStoryTagPage' path='/allStoryTags'
               render={(props) => <LazyLoader load={() => import('./containers/NextStoryTagsPage')} {...props} />}
        />
        <Route exact key='notFound' path='*'
          render={(props) => <LazyLoader load={() => import('./containers/Notfound')} {...props} />}
        />
      </Switch>
    </>;
  }
}

export default Routes;
