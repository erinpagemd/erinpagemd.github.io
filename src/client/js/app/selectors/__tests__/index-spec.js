import expect from 'expect';
import { Record, fromJS } from 'immutable';
import { appTitlesAsUuidGuidSelector, getActiveTitleFromAppTitlesByGuid } from '../';

describe('Selectors', () => {
  it('appTitlesAsUuidGuidSelector', () => {
    const initialState = new Record({
      app: {
        titles: fromJS([
          { guid: 'MOCK_GUID', uuid: 'MOCK_UUID' }
        ])
      }
    })();

    const titles = appTitlesAsUuidGuidSelector(initialState);
    expect(titles.findIndex(title => title.guid === 'MOCK_GUID')).toBe(0);
  });

  it('should retreive the correct title by guid', () => {
    const initialState = new Record({
      library: {
        activeTitle: fromJS({
          lin: 2,
          contentId: 'MOCK_GUID_2'
        })
      },
      app: {
        titles: fromJS([
          { lin: 1, guid: 'MOCK_GUID_1', uuid: 'MOCK_UUID_1' },
          { lin: 2, guid: 'MOCK_GUID_2', uuid: 'MOCK_UUID_2' },
          { lin: 3, guid: 'MOCK_GUID_3', uuid: 'MOCK_UUID_3' }
        ])
      }
    })();

    const title = getActiveTitleFromAppTitlesByGuid(initialState);
    expect(title.get('uuid')).toEqual('MOCK_UUID_2');
  });
});
