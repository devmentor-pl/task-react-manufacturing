import { Home, About, Categories } from './components/views';
import { Header, Footer, Wrapper, Nav, CategoryForm } from './components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const { categoryFormIsActive } = useSelector(state => state.flashcards)

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

          </Switch>

          {categoryFormIsActive && <CategoryForm />}

        <Footer />
      </Wrapper>

      </Router>
  );
}

export default App;
