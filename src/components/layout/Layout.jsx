import React from "react";
import PropTypes from "prop-types";

import s from "./Layout.module.scss";

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  footer: PropTypes.object
};

export default function Layout({ title, children, footer }) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>{title}</h1>
      </header>
      <main className={s.layout__main}>
        {children}
      </main>
      <footer className={s.layout__footer}>{footer}</footer>
    </div>
  );
}
