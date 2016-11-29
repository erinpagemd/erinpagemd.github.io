import { createSelector } from 'reselect';

export const appTitlesAsUuidGuidSelector = createSelector(
  [
    state => state.app.titles
  ],
  (titles) => titles.map(title => ({ uuid: title.get('uuid'), guid: title.get('guid') }))
);

// Following best practice to retrieve the dynamic argument of the 'guid'
// from state of the activeTitle
// per https://github.com/reactjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
// Use case(s):
//  - Retrieve uuid of title for APP_CLOSE_TITLE
export const getActiveTitleFromAppTitlesByGuid = createSelector(
  [
    state => state.app.titles,
    state => state.library.activeTitle
  ],
  (titles, activeTitle) => titles.find(title => activeTitle && (activeTitle.get('contentId') === title.get('guid')))
);

export default [
  appTitlesAsUuidGuidSelector,
  getActiveTitleFromAppTitlesByGuid
];
