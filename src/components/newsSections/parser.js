function xmlParser(text, tags) {
  if (!text || !tags) return [];

  const itemTagBegin = "<item>";
  const itemTagEnd = "</item>";

  let prevLocation = 0;
  let itemLocations = [];
  let itemsRaw = [];
  let items = [];

  while (prevLocation != -1) {
    const begin = text.indexOf(itemTagBegin, prevLocation + 1);
    const end = text.indexOf(itemTagEnd, begin);
    itemLocations.push([begin + itemTagBegin.length, end]);
    prevLocation = begin;
  }

  for (let i = 0; i < itemLocations.length - 1; i++) {
    const locs = itemLocations[i];
    const begin = locs[0];
    const end = locs[1];
    const sub = text.substring(begin, end);
    itemsRaw.push(sub);
  }

  itemsRaw.map((item) => {
    let obj = {};

    tags.map((tag) => {
      const startTag = "<" + tag + ">";
      const endTag = "</" + tag + ">";
      const startIndx = item.indexOf(startTag) + startTag.length;
      const endIndx = item.indexOf(endTag);
      const it = item.substring(startIndx, endIndx);
      obj[tag] = it;
    });

    items.push(obj);
  });

  return items;
}

export async function parser(apiURL, apiId = "", tags = []) {
  if (!apiURL) return [];

  let result = [];

  try {
    const url = new URL(apiId, apiURL);
    const fetchData = await fetch(url).then(res => res.text());
    result = xmlParser(fetchData, tags);
  } catch (e) {
    result.push(["Could not fetch item: ", apiId]);
  }

  return result;
}