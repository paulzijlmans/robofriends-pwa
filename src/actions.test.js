import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
    it('should set the text', () => {
        expect(actions.setSearchField('myText')).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: 'myText'
        });
    });
});

describe('requestRobots', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }

    it('handles requesting robots API', () => {
        expect(action[0]).toEqual(expectedAction);
    });
})