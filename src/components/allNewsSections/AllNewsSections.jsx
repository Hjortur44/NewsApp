import React, { useState, useEffect } from "react";

import { parser } from "../../parser.js";

export default function AllNewsSections() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");

      const tags = ["title", "link", "description", "pubDate"]; 
      const apiURL = "https://www.ruv.is/rss/";
      const apiId = "frettir";
      const result = await parser(apiURL, apiId, tags);        
  
      if(!result) {
        setError('Gat ekki sótt fréttalista.');
      }

      setLoading(false);
      setItems(result);
    }

    fetchData();
  }, []);

  if (error) {
    return (
      <p>{error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li key={i}><a href={item.link}>{item.title}</a></li>    
      );})}
    </ul>
  );
}
