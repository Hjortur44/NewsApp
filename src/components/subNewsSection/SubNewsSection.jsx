import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { mapper } from "../../mapper.js";

SubNewsSection.propTypes = {
  pid: PropTypes.string.isRequired
};

export default function SubNewsSection({ pid }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await mapper(pid);
      setNews(...result);
    }

    fetchData();
  }, [pid]);

  return (
    <div>
      <ul>
        <h2>{news.title}</h2>
        {news && news.pars && news.pars.map((it, i) => {
          return (
            <li key={i}>
              <a href={it.link}>{it.title}</a>
            </li>
          );
        })}
      </ul>
      <Link to="/">Til baka</Link>
    </div>
  );
}