import Home from './components/views/Home';
import { Header, Footer, Wrapper, Nav } from './components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>

      <Header />
        <Nav />
        <Router>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>

        </Router>
        <Footer />
      </Wrapper>

    </div>
  );
}

export default App;
