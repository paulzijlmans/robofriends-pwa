import React from "react";
import { shallow } from "enzyme";
import CardList from './CardList'

it('renders the Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: ' JohnJohn',
            email: 'john@gmail.com'
        }
    ];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});