import React from 'react'
import { AuthManager } from '../../auth/auth-manager'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const authManager = new AuthManager()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authManager.isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}