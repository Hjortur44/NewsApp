import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

import { mapper } from "./mapper.js";
import s from "./NewsSections.module.scss";

NewsSection.propTypes = {
  id: PropTypes.string.isRequired
};

export default function NewsSection({ id }) {
  const fetch = async () => { return await mapper(id); };
  const { isSuccess, isLoading, isError, data } = useQuery(["repo"], fetch);

  return (
    <div className={s.container}>
      {isLoading && (<p>Sæki gögn...</p>)}
      {isError && (<p>Villa !</p>)}
      {isSuccess && data.map((d, i) => {
        return (
          <div key={i} className={s.container__sub}>
            <h2 className={s.container__sub_header}>{d.title}</h2>
            <ul className={s.container__sub_list}>
              {d.pars.map((article, i) => {
                return (
                  <li key={i} className={s.container__sub_list_item}>
                    <a href={article.link}>{article.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}