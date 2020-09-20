import * as Store from '~client/app/store';

export const featureStateSelector = (state: Store.RootState) =>
  state.organization;
