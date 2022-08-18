import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';

import Index from './pages/Index.jsx';
import NewsSection from './pages/NewsSection.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {

  return (
    <Layout title="RÚV fréttir" footer={
      <p>Fréttir frá <a href="https://www.ruv.is/">RÚV</a>.</p>
    }>
      <Routes>
          <Route exact path="/Hjortur44/NewsApp/" element={ <Index /> }/>
          <Route path="/Hjortur44/NewsApp/:id" element={ <NewsSection /> }/>
          <Route element={ <NotFound /> }/>
      </Routes>
    </Layout>
  );
}
