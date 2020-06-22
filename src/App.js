import React,{useEffect} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Routing from './Routeing';
import Getapp from './Main_Page/Getapp/Getapp';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';


const Error404=()=>{
      return(
      <h1>Page Not Found</h1>
      );
    }


const history = createHistory()
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})


const App = ({ handle, langg, button }) => {
      
      useEffect(()=>{
            ReactGA.pageview(window.location.pathname)
      })
      

      return(
      <BrowserRouter history={history}>
            <Switch>
                  <Route path="/get-app" component={() => <Getapp handle={handle} button={button} />} />
                  <Route path="/" component={() => <Routing langg={langg} handle={handle} button={button} />} />
                  <Route component={Error404} />
            </Switch>
      </BrowserRouter>
      )
}

export default App;
