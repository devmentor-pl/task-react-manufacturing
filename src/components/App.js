import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../store/store';

import Layout from '../views/Layout';
import HomePage from '../views/HomePage';
import RecipesPage from '../views/RecipesPage';
import RecipePage from '../views/RecipePage';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
