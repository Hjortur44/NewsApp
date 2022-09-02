import React from "react";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { mapper } from "./mapper.js";
import NewsSection from "../newsSection/NewsSection";

import s from "./NewsSections.module.scss";

NewsSections.propTypes = {
  id: PropTypes.string.isRequired
};

export default function NewsSections({ id }) {
  const fetch = async () => {
    return await mapper(id);
  };

  const { isSuccess, isLoading, isError, data } = useQuery(["repo"], fetch);

  return (
    <div className={s.container}>
      {isLoading && (<p>Sæki gögn ...</p>)}
      {isError && (<p>Villa !!</p>)}
      {isSuccess && data.map((d, i) => {
        return (
          <NewsSection key={i} sectionTitle={d.title} articles={d.pars} />
        );
      })}
    </div>
  );
}