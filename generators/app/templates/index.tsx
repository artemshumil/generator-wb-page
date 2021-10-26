import React from 'react';
import { <%= state_PascalCase %>Page } from './page';
import { <%= state_ConstantCase %>_PAGE_NODE } from './node';
import reducer, { <%= saga_CamelCase %>Saga, <%= state_ConstantCase %>_REDUCER_NAME } from './_redux';
import { PageProps } from '@/_types/page';
import { usePageTitle } from '@/hooks/use-page-title';
import { useRoute } from 'react-router5';
import { withInject } from '@/store/withInject';

const Page = ({ content }: PageProps) => {
  usePageTitle('<%= page_SentenceCase %> / WB Cloud');
  const { route } = useRoute();
  if (route.name === <%= state_ConstantCase %>_PAGE_NODE) {
    return <<%= state_PascalCase %>Page />;
  }

  return content || null;
};

export default withInject({
  sagas: {
    <%= saga_CamelCase %>Saga: <%= saga_CamelCase %>Saga.watcher,
  },
  reducers: {
    [<%= state_ConstantCase %>_REDUCER_NAME]: reducer,
  },
})(Page);
