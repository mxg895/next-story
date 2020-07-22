import { Route, Switch } from 'react-router';
import React from 'react';
import LazyLoader from './components/LazyLoader';
import ProtectedRoute from './components/ProtectedRoutes';

class Routes extends React.Component {
  render() {

    var host = window.location.protocol + '//'+ window.location.host;
    console.log(host);
    return <>
      <Switch>
        <ProtectedRoute exact key='home' path={'/'}
               component={(props: any) => <LazyLoader load={() => import('./containers/Home')} {...props} />}
        />
        <ProtectedRoute exact key='profile' path='/profile'
               component={(props: any) => <LazyLoader load={() => import('./containers/Profile')} {...props} />}
        />
        <Route exact key='login' path='/login'
               render={(props) => <LazyLoader load={() => import('./containers/Login')} {...props} />}
        />
        <Route exact key='signup' path='/signup'
               render={(props) => <LazyLoader load={() => import('./containers/SignUp')} {...props} />}
        />
        <ProtectedRoute exact key='mediaPage' path='/:mediaType/:id'
               component={(props: any) => <LazyLoader load={() => import('./containers/MediaPage')} {...props} />}
        />
        <ProtectedRoute exact key='nextStoryTagPage' path='/allStoryTags'
               component={(props: any) => <LazyLoader load={() => import('./containers/NextStoryTagsPage')} {...props} />}
        />
        <ProtectedRoute exact key='notFound' path='*'
               component={(props: any) => <LazyLoader load={() => import('./containers/Notfound')} {...props} />}
        />
      </Switch>
    </>;
  }
}

export default Routes;
