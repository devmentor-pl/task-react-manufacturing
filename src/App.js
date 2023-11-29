import { Home, About, Categories } from './components/views';
import { Header, Footer, Wrapper, Nav } from './components'
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
              <Categories />
            </Route>
          </Switch>

        <Footer />
      </Wrapper>
      </Router>

    </div>
  );
}

export default App;
