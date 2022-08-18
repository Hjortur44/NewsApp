import PropTypes from 'prop-types';

import Rss from '../components/rss/Rss.jsx';

NewsSection.propTypes = {
    apiURL: PropTypes.objectOf(URL).isRequired,
    apiId: PropTypes.string.isRequired
}

export default function NewsSection({ apiURL, apiId }) {
    return (
        <Rss apiURL={apiURL} apiId={apiId} />
    )
}
