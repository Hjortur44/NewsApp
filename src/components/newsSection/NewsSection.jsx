import React from "react";
import PropTypes from "prop-types";

import s from "./NewsSection.module.scss";

NewsSection.propTypes = {
  sectionTitle: PropTypes.string,
  articles: PropTypes.array,
  limit: PropTypes.number
};

export default function NewsSection({ sectionTitle, articles, limit }) {
  if (limit && limit > 0) articles = articles.splice(0, limit);

  return (
    <div className={s.container}>
      <h2 className={s.container__header}>{sectionTitle}</h2>
      <ul className={s.container__list}>
        {articles.map((article, i) => {
          return (
            <li key={i} className={s.container__list_item}>
              <a href={article.link}>{article.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}