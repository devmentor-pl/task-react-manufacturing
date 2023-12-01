import { Home, About, Categories, Flashcards } from './components/views';
import { Header, Footer, Wrapper, Nav } from './components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (

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

            <Route path='/flashcards/:category'>
              <Flashcards />
            </Route>

          </Switch>

        <Footer />
      </Wrapper>

      </Router>
  )
}

export default App;
