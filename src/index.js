import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from "react-intl";
import en from "./language/en/text.json"
import hi from "./language/hi/text.json"
import { useState } from 'react';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga'
import App from './App';
import * as Sentry from '@sentry/browser';

ReactGA.initialize('UA-161499355-1')

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const language = urlParams.get('lan') || 'en';
const lang = {
  'hi': (hi),
  'en': (en),
};

let t = { ...lang['en'], ...lang[language] }
const messages = language === 'en' ? lang['en'] : t;

const Main = () => {


  const [langg, setLangg] = useState(messages);
  const [button, setButton] = useState(language);
  const handle = (e) => {
    t = { ...lang['en'], ...lang[e] }
    setLangg(t)
    setButton(e)
  };

  return (
    <IntlProvider messages={langg} >
      <App langg={langg} handle={handle} button={button} />
    </IntlProvider>
  )
};
ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
