import React from "react";
import PropTypes from "prop-types";

SelectedNewsSection.propTypes = {
  id: PropTypes.string.isRequired,
  moreNewsUrl: PropTypes.string,
  limit: PropTypes.number,
};

export default function SelectedNewsSection({ id, moreNewsUrl, limit = -1 }) {
  return (
    <>
      <p>{id}</p>
      <p>{moreNewsUrl}</p>
      <p>{limit}</p>
    </>
  );
}
