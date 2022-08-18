import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import rss from './rss.json'

export default function Index() {
  const [list, setList] = useState([]);
  const apiURL = new URL("https://www.ruv.is/rss/");
  let { id } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(rss).then(() => rss);
      setList(data.map((item) => [item.title, item.url]));      
    }

    fetchData();
  }, []);

  if(!id) id = "frettir";

  return (
    <ul>
      {list.map(([title, url], i) => {
        return (
          <li key={i}><a href={url}>{title}</a></li>    
      );})}
    </ul>
  );
}
