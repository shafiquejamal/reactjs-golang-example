import { Navigate, useRoutes } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { Secure } from './secure/secure';
import Index from './index/index';

const Routes = () => {
    const { isAuthenticated } = useAuth0();

    const routes = [
        { path: '/secure', element: (isAuthenticated ? <Secure /> : <div>Not authenticated</div>) },
        { path: '/', element: <Index /> },
      ];
      
    const routing = useRoutes(routes);

    return routing;
}

export default Routes;
  