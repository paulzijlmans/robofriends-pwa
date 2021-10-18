import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots()).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
});

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots()).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        });
    });

    it('should handle EQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{ name: 'robot' }]
        })).toEqual({
            robots: [{ name: 'robot' }],
            isPending: false
        });
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'oops'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'oops'
        });
    });
});