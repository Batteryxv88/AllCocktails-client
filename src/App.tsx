import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Home from './pages/Home';
import TypeOfCocktales from './pages/TypeOfCocktales';
import CardOpened from './pages/CardOpened';
import Popup from './components/Popup/Popup';
import { useAppDispatch } from './state/reduxHooks';
import { useEffect } from 'react';
import { fetchCocktails } from './state/cocktales/cocktailsSlice';

import Menu from './components/Header/HeaderSlim/Menu/Menu';
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);


  return (
    <BrowserRouter basename="/Cocktailes">
      <div className={styles.app}>
        <div className={styles.container}>
          <Popup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="strong-alcohol" element={<TypeOfCocktales />} />
            <Route path="low-alcohol" element={<TypeOfCocktales />} />
            <Route path="non-alcoholic" element={<TypeOfCocktales />} />
            <Route path=":category/:id" element={<CardOpened />} />
          </Routes>
        </div>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
