import * as React from 'react';

import * as AppStateOrganization from '~client/app/store/organization';

import * as TeamRoot from '../components/team-root';

type Props = {
  tree: AppStateOrganization.State['tree'];
};

export const Component = (props: Props) => {
  return <TeamRoot.Component tree={props.tree} />;
};
