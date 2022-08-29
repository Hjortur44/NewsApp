import { parser } from "./parser.js";
import rssJson from "./rss.json";

// TODO: create a cach for the rss and the parser info.
export async function mapper(param = "/") {
  const json = await fetch(rssJson).then(() => rssJson);
  const { rssUrl, tag, frettaefni } = json;

  let results = [];

  // Main news page.
  if (param === "/") {
    for (let i = 0; i < frettaefni.length; i++) {
      const { id, url, title } = frettaefni[i];
      const pars = await parser(rssUrl, url, tag);
      results.push({ id: id, title: title, pars: pars });
    }
  } else { // Parent news page.
    for (let i = 0; i < frettaefni.length; i++) {
      const { id, url, title, children } = frettaefni[i];

      if (param === id) {
        const pars = await parser(rssUrl, url, tag);
        results.push({ id: id, title: title, pars: pars });
      } else { // Child news page.
        for (let i = 0; i < children.length; i++) {
          const { id, url, title } = children[i];

          if (param === id) {
            const pars = await parser(rssUrl, url, tag);
            results.push({ id: id, title: title, pars: pars });
          }
        }
      }
    }
  }

  return results;
}