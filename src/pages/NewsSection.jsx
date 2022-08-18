import { useParams } from "react-router-dom";

import Rss from '../components/rss/Rss.jsx';

export default function NewsSection() {
    let { id } = useParams();
    const apiURL = new URL("https://www.ruv.is/rss/");
    
    if(!id) id = "frettir";

    return (
        <Rss apiURL={apiURL} apiId={id} />
    )
}
