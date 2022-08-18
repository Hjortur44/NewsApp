import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { parser } from './parser.js'

Rss.propTypes = {
  apiURL: PropTypes.objectOf(URL).isRequired,
  apiId: PropTypes.string.isRequired
}

export default function Rss({ apiURL, apiId }) {
  const [items, setItems] = useState([]);
  const tags = ["title", "link", "description", "pubDate"];

  useEffect(() => {
    async function fetchData() {
      const result = await parser(apiURL, apiId, tags);        
      let ents = [];

      if(result)           
        ents = Object.entries(result);
        
      setItems(ents);       
    }

    fetchData();
  }, [apiId]);

  return (
    <ul>
      {items.map(([key, value], i) => {
        return (
          <li key={i}>{key}: {value}</li>    
      );})}
    </ul>
  );
}