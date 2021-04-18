import React from 'react';
import Navbar from '../Nabar/Navbar';
import MainPage from '../MainPage/MainPage';
import { withTranslation, WithTranslation } from 'react-i18next';
import s from './App.scss';

interface AppProps extends WithTranslation {}

class App extends React.Component<AppProps> {
  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <Navbar/>
        <MainPage/>
      </div>
    );
  }
}

export default withTranslation()(App);
