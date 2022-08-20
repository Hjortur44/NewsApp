function xmlParser(text, tags) {
  if(!text || !tags) return [];

  let itemLocation = 0;
  let itemIndices = [];
  let itemsRaw = [];
  let items = [];

  while(itemLocation != -1) {
    itemLocation = text.indexOf("<item>", itemLocation + 1);
    itemIndices.push(itemLocation);
  }
  
  for(let i = 1; i < itemIndices.length - 1; i++) {
      itemsRaw.push(text.substring(itemIndices[i - 1], itemIndices[i]));
  }

  itemsRaw.map((item) => {
    let obj = {};

    tags.map((tag) => {
      let startTag = "<" + tag + ">";
      let endTag = "</" + tag + ">";
      let startIndx = item.indexOf(startTag) + startTag.length;
      let endIndx = item.indexOf(endTag);
      let it = item.substring(startIndx, endIndx);
      obj[tag] = it;
    });

    items.push(obj);
  });

  return items;
}

export async function parser(apiURL, apiId, tags) {
  if(!apiURL || !apiId) return {};

  let parser = {};

    const url = new URL(apiId, apiURL);
    const result = await fetch(url);

    if(!result.ok) {
      console.error("NOOO !!");
      return;
    }

    const text = await result.text();
    parser = xmlParser(text, tags);

  return parser;
}