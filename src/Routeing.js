import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Privacy from './Main_Page/Pages/Privacy';
import Termandcondition from './Main_Page/Pages/Termandcondition';
import Refund from './Main_Page/Pages/Privacypolicy';
import contactus from './Main_Page/Pages/contactus';
import Mainfunction from './Main_Page/Main/Main_function';
import social from './Main_Page/Pages/socialpage';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})





function Routing({ handle, langg, button }) {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  })


  return (
    <React.Fragment>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms-conditions" component={Termandcondition} />
          <Route path="/refundpolicy" component={Refund} />
          <Route path="/contact-us" component={contactus} />
          <Route exact path="/" component={() => <Mainfunction langg={langg} handle={handle} button={button} />} />

        </Switch>
        .

        <div style={{ backgroundColor: '#282727', minHeight: 'calc(100vh - 429px)' }}>

          {social()}
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routing;