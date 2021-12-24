import './App.css';
import './media.css';
import logo from "./components/logo.svg"
import Navigation from "./components/Navigation"
import Quotes from "./components/Quotes"
import data from './data'
import {Route, Switch, useParams, useLocation} from "react-router-dom"
import { Page } from './Page'
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <Navigation />
      <Quotes />
      <div className="page">
        {useParams() === {} &&<p>Pick a category</p>}
        <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames="transition"
          key={location.key}
          >
        <Switch>
            <Route path="/:pageId"><Page/></Route>
            <Route path="/squiggly-muse-blog"><h2 className="pick">Pick a category!</h2></Route>
        </Switch>
        </CSSTransition>
      </TransitionGroup>
      </div>

    </div>
  );
}

export default App;
