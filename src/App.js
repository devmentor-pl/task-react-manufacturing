import Home from './components/views/Home';
import { Header, Footer, Wrapper } from './components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>

      <Header />
      <Wrapper>
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
      </Wrapper>
      <Footer />

    </div>
  );
}

export default App;
