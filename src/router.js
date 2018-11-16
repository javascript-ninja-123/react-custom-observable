import React, {lazy} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

const App = lazy(() => import('./components/App'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Tick = lazy(() => import('./components/Tick'))


 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/tick' component={Tick}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/' component={App}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
