import React, { Component } from 'react';
import logo from '../../assets/danielo.png';
import './App.css';
import Layout, { LayoutContext } from '../Layout/Layout';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Layout>
        <LayoutContext.Consumer>
          {([theme, setTheme]) => (
            <div className={'App'}>
              <header className="App-header">
                <img
                  onClick={() => setTheme('black')}
                  src={logo}
                  className="App-logo"
                  alt="logo"
                />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                  <br />
                  Current theme selected: <code>{theme}</code>
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          )}
        </LayoutContext.Consumer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  identity: state.identity
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
