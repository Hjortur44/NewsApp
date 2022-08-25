import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { parser } from "../../parser.js";
import rssJson from "../../rss.json";

import SelectedNewsSection from "../selectedNewsSection/SelectedNewsSection.jsx";

export default function AllNewsSections() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [moreLinks, setMoreLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const json = await fetch(rssJson).then(() => rssJson);      
      const {url, tag, frettaefni} = json;
      
      let results  = [];
      let links = [];

      for(let i = 0; i < frettaefni.length; i++) {
        const fid = frettaefni[i].id;
        results.push({fid : fid, efni: await parser(url, frettaefni[i].url, tag)});
        links.push(fid);   
      }
  
      setMoreLinks(links);
      setNews(results);
      setLoading(false);
    }
    
    fetchData();
  }, []);

  return (
    <div>
      {error && (<p>{error}</p>)}
      {loading && <p>Sæki gögn.</p>}
      <div>
         {news.map((item, i) => {
          return (
            <ul key={i}>
              {item.efni.map((it, j) => {
                return(
                  <li key={j}>
                    <a href={it.link}>{it.title}</a>
                  </li>          
                );
              })}
            </ul>
          );
          })}
      </div>      
    </div>
  );
}
