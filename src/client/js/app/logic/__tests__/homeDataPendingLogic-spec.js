import expect from 'expect';
import { homeDataPendingLogic } from '../homeDataPendingLogic';
import { HOME_DATA_PENDING } from '../../constants';

describe('searchTitleAuthDescLogic', () => {
  describe('fetch data success, process', () => {
    let resolvedValue;

    beforeEach((done) => {
      const httpClient = {
        get(url) {
          return new Promise((resolve, reject) => {
            resolve({
              data: { id: 1 }
            });
          });
        }
      };

      const action = {
        payload: {}
      };

      homeDataPendingLogic.process({ httpClient, action })
        .then(result => {
          resolvedValue = result;
          done();
        });
    });

    it('should return promise that resolves to the correct data', () => {
      expect(resolvedValue).toEqual({ id: 1 });
    });
  });
});
