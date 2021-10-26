import React from 'react';
import { Route } from '@/_types/router';

const route: Route = {
  name: '<%= state_KebabCase %>',
  path: '/<%= state_KebabCase %>',
  Component: React.lazy(() => import('./index')),
};

export default route;
