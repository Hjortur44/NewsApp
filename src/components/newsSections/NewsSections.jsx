import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { mapper } from "./mapper.js";

NewsSections.propTypes = {
  id: PropTypes.string.isRequired
};

export default function NewsSections({ id }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await mapper(id);
      setNews(result);
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {news && news.map((mainItem, i) => {
        return (
          <ul key={i}>
            <h2>{mainItem.title}</h2>
            {mainItem.pars.map((subItem, j) => {
              return (
                <li key={j}>
                  <a href={subItem.link}>{subItem.title}</a>
                </li>
              );
            })
            }
          </ul>
        );
      })}
      {id != "/" && <Link to="/">Til baka</Link>}
    </div>
  );
}