import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";

import IndexPage from "./pages/IndexPage.jsx";
import SelectedNewsSectionPage from "./pages/SelectedNewsSectionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App () {
  return (
    <Layout title="Viðmót fyrir rss þjónustu frá RÚV" footer={
      <p>Fréttavefur <a href="https://www.ruv.is/">RÚV</a>.</p>
    }>
      <Routes>
          <Route exact path="/" element={ <IndexPage /> }/>
          <Route path="/:id" element={ <SelectedNewsSectionPage /> }/>
          <Route element={ <NotFoundPage /> }/>
      </Routes>
    </Layout>
  );
}
