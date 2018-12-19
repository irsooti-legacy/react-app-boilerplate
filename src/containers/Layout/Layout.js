import React, { Component } from 'react';
import './layout.css';

export const LayoutContext = React.createContext([]);

export default class Layout extends Component {
  state = {
    theme: 'default',
    lang: 'en-US'
  };

  changeTheme = theme => {
    this.setState({ theme });
  };

  changeLanguage = culture => {
    this.setState({ culture });
  };

  componentDidMount() {
    document.body.lang = this.state.lang;
  }
  componentDidUpdate() {
    document.body.lang = this.state.lang;
  }

  render() {
    const { theme, lang } = this.state;

    return (
      <LayoutContext.Provider
        value={[theme, this.changeTheme, lang, this.changeLanguage]}
      >
        <div className={`layout ${theme}`}>{this.props.children}</div>
      </LayoutContext.Provider>
    );
  }
}
