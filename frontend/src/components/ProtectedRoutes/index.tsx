import React from 'react';
import { RouteProps} from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute: React.FC<RouteProps> = (props: any, ...rest) => {
    const Component = props.component;
    console.log('ProtectedRoute');
    const isAuthString = localStorage.getItem('isAuthenticated');
    const isAuth = isAuthString && parseInt(isAuthString);
    return (
      <Route
          {...rest}
          render={(props) => {
              if (isAuth) {
                  return <Component {...props} />;
              } else {
                  return <Redirect to={
                      {
                          pathname: '/signup',
                          state: {
                              from: props.location
                          }
                      }
                  } />;
              }
          }}
      />
    );
};

export default ProtectedRoute;
