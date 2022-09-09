import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { mapper } from "./mapper.js";
import NewsSection from "../newsSection/NewsSection";

import s from "./NewsSections.module.scss";

NewsSections.propTypes = {
  id: PropTypes.string.isRequired,
  limit: PropTypes.number
};

export default function NewsSections({ id, limit = 0 }) {
  const fetch = async () => {
    return await mapper(id);
  };

  const { isSuccess, isLoading, isError, data } = useQuery(["repo"], fetch);

  return (
    <div className={s.container}>
      {isLoading && (<p>Sæki gögn...</p>)}
      {isError && (<p>Villa !</p>)}
      {isSuccess && data.map((d, i) => {
        return (
          <section key={i} className={s.container__section}>
            <NewsSection sectionTitle={d.title} articles={d.pars} limit={limit} />
            {id === "/" && <Link to={d.id}>Fleiri fréttir...</Link>}
            {id !== "/" && <Link to="/">Til baka...</Link>}
          </section>
        );
      })}
    </div>
  );
}