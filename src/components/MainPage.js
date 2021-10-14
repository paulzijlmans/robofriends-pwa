import { Component } from "react";
import Header from "./Header";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import CardList from './CardList';

export class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
  }
  
  render() {
    const { robots, onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;