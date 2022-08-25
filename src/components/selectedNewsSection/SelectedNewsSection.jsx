import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

SelectedNewsSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  moreLink: PropTypes.string,
  limit: PropTypes.number,
};

export default function SelectedNewsSection({ id, title = "", moreLink = "", limit = -1 }) {
  return (
    <div>
      <p>dfdsfsdf</p>
      <Link to="/">Til baka</Link>
    </div>
  );
}
