import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';
import { Explore } from 'pages/Explore/Explore';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
};
