import React from 'react';
import { RouteProps} from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute: React.FC<RouteProps> = (props: any, ...rest) => {
    const Component = props.component;
    const sessionDataString = sessionStorage.getItem('NS-session-data');
    const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
    const loginExpiry = sessionDataObj?.expiry;
    const loginExpiryDate = new Date(loginExpiry);
    const isLoggedInAndUnexpired = loginExpiry && loginExpiryDate > new Date();
    if (isLoggedInAndUnexpired) {
        const newExpiry = loginExpiryDate.setSeconds(loginExpiryDate.getSeconds() + 3599);
        sessionDataObj.expiry = newExpiry;
        sessionStorage.setItem('NS-session-data', JSON.stringify(sessionDataObj));
    } else {
        sessionStorage.removeItem('NS-session-data');
    }

    return (
      <Route
          {...rest}
          render={(props) => {
              if (isLoggedInAndUnexpired) {
                  return <Component {...props} />;
              } else {
                  return <Redirect to={
                      {
                          pathname: '/login',
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
