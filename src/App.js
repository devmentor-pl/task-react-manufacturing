import Home from './components/views/Home';
import { Header, Footer, Wrapper, Nav, About } from './components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>

      <Wrapper>

      <Header />
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/categories'>
              <About />
            </Route>
          </Switch>

        <Footer />
      </Wrapper>
      </Router>

    </div>
  );
}

export default App;
