import React from "react";
import { useQuery } from "react-query";

import PropTypes from "prop-types";

import { mapper } from "./mapper.js";

NewsSections.propTypes = {
  id: PropTypes.string.isRequired
};

export default function NewsSections({ id }) {
  const fetch = async () => {
    return await mapper(id);
  };

  const { isSuccess, isLoading, isError, data } = useQuery(["repo"], fetch);

  return (
    <div>
      {isLoading && (<p>Sæki gögn ...</p>)}
      {isError && (<p>Villa !!</p>)}
      {isSuccess && data.map((d, i) => {
        return (
          <div key={i}>
            <h2>{d.title}</h2>
            <ul>
              {d.pars.map((p, j) => {
                return (
                  <li key={j}><a href={p.link}>{p.title}</a></li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}