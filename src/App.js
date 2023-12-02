import { Home, About, Categories, Flashcards } from './components/views';
import { Header, Footer, Wrapper, Nav } from './components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendData, loadData } from './modules/flashcards';

let isInitial = true;

function App() {
  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.flashcards)

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    dispatch(sendData(categories))
    //wylączyłam StrictMode, ponieważ wykonywał mi się ten dispatch rownież za pierwszym razem. A chcę tutaj tylko jeden raz nie aktualizować firebase.

  }, [categories, dispatch]);

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
