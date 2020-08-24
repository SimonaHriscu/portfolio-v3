import React from 'react';
import Loading from './components/Loading';
import MainContainer from './components/Main/MainContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }
  render() {
    // if (this.state.loading) return <Loading />;

    return (
      <div className="App">
        <MainContainer />;
      </div>
    );
  }
}
