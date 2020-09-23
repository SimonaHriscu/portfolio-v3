import React from 'react';
import Loading from './components/Loading/Loading';
import MainContainer from './components/Main/MainContainer';
import Gif from './components/Main/img/loader.gif';

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
    }, 4400);
  }
  render() {
    if (this.state.loading) return <Loading gif={Gif} />;

    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}
